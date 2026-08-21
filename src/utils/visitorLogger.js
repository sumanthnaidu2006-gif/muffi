import { CONFIG } from '../config';

/**
 * Visitor Logger & Instant Phone / Discord Notification Dispatcher
 * Sends instant notifications whenever someone visits or unlocks the scrapbook.
 */

export const logVisitorEvent = async (eventType = 'PAGE_VIEW', metadata = {}) => {
  try {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const userAgent = navigator.userAgent;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    const deviceType = isMobile ? (userAgent.includes('iPhone') ? '📱 iPhone' : '📱 Android') : '💻 Desktop / Laptop';
    const screenRes = `${window.screen.width}x${window.screen.height}`;

    const title = eventType === 'UNLOCKED' 
      ? '🎉 Muffi unlocked the Scrapbook! ❤️' 
      : '👀 Someone opened your Scrapbook website!';

    const message = [
      `⏰ Time (IST): ${timestamp}`,
      `📱 Device: ${deviceType}`,
      `📐 Screen: ${screenRes}`,
      `🎨 Theme: ${metadata.theme || 'default'}`,
      eventType === 'UNLOCKED' ? '🔑 Status: Successfully entered passcode 3117!' : '🌐 Status: Viewing Lock Screen',
    ].join('\n');

    // 1. Instant Push Notification via NTFY (Free instant push alert)
    // Topic: ntfy.sh/muffi_siddhu_sumanthnaidu2006
    await fetch('https://ntfy.sh/muffi_siddhu_sumanthnaidu2006', {
      method: 'POST',
      headers: {
        'Title': title,
        'Priority': eventType === 'UNLOCKED' ? 'high' : 'default',
        'Tags': eventType === 'UNLOCKED' ? 'tada,heart,unlock' : 'eyes,heart',
      },
      body: message,
    }).catch(() => {});

    // 2. Discord Webhook Notification (pings @notzoro_x)
    const discordWebhook = CONFIG.discord?.webhookUrl;
    if (discordWebhook) {
      await fetch(discordWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: eventType === 'UNLOCKED' ? `🔔 **Hey <@notzoro_x>!** Muffi just unlocked the scrapbook! ❤️` : undefined,
          embeds: [
            {
              title: title,
              color: metadata.theme === 'bmw' ? 0x009FE3 : 0xF59E0B,
              fields: [
                { name: '⏰ Time (IST)', value: timestamp, inline: true },
                { name: '📱 Device', value: deviceType, inline: true },
                { name: '🎨 Theme', value: metadata.theme?.toUpperCase() || 'BMW', inline: true },
                { name: '🔑 Passcode', value: eventType === 'UNLOCKED' ? '✅ 3117 Verified' : '🔒 Locked Screen', inline: false },
              ],
              footer: { text: `Target: notzoro_x • For Muffi with Love` },
            },
          ],
        }),
      }).catch(() => {});
    }

    // 3. Email Notification Dispatch to sumanthnaidu2006@gmail.com
    if (eventType === 'UNLOCKED') {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b94e637a-a63e-4b6c-a212-32a2f8c5c7bb',
          subject: `🎉 Muffi unlocked the Scrapbook at ${timestamp}! ❤️ (notzoro_x)`,
          from_name: 'Muffi Scrapbook Notifier',
          to_email: 'sumanthnaidu2006@gmail.com',
          message: message,
        }),
      }).catch(() => {});
    }
  } catch (err) {
    console.error('Visitor logger error:', err);
  }
};
