import { CONFIG } from '../config';

/**
 * Visitor Logger & Instant Phone / Discord Notification Dispatcher
 * Captures detailed visitor identity (City, State, ISP, Browser, OS, Device)
 */

export const logVisitorEvent = async (eventType = 'PAGE_VIEW', metadata = {}) => {
  try {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const userAgent = navigator.userAgent;

    // Detect Device & OS
    let os = 'Unknown OS';
    if (/iPhone|iPad|iPod/i.test(userAgent)) os = '🍎 iOS (Apple iPhone/iPad)';
    else if (/Android/i.test(userAgent)) os = '🤖 Android';
    else if (/Windows NT/i.test(userAgent)) os = '🪟 Windows PC';
    else if (/Macintosh/i.test(userAgent)) os = '🍏 macOS (Mac)';

    // Detect Browser
    let browser = 'Unknown Browser';
    if (/Edg/i.test(userAgent)) browser = 'Microsoft Edge';
    else if (/Chrome/i.test(userAgent) && !/Edg/i.test(userAgent)) browser = 'Google Chrome';
    else if (/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent)) browser = 'Apple Safari';
    else if (/Firefox/i.test(userAgent)) browser = 'Mozilla Firefox';

    const screenRes = `${window.screen.width}x${window.screen.height}`;
    const language = navigator.language || 'en';

    // Fetch accurate City, Region & ISP via free IP service
    let locationStr = 'Resolving location...';
    let ispStr = 'Network';
    try {
      const geoRes = await fetch('https://ipwho.is/').then((r) => r.json());
      if (geoRes && geoRes.success !== false) {
        locationStr = `${geoRes.city || ''}, ${geoRes.region || ''}, ${geoRes.country || ''} 📍`;
        ispStr = geoRes.connection?.isp || geoRes.isp || 'Mobile / WiFi';
      }
    } catch (e) {
      locationStr = 'Location available via IP';
    }

    const title = eventType === 'UNLOCKED'
      ? '🎉 Muffi Unlocked the Scrapbook! ❤️'
      : '👀 Someone Opened the Scrapbook Website!';

    const message = [
      `📍 Location: ${locationStr}`,
      `📡 Network / ISP: ${ispStr}`,
      `🌐 Browser: ${browser}`,
      `💻 OS / Device: ${os}`,
      `⏰ Time (IST): ${timestamp}`,
      `🎨 Theme: ${metadata.theme?.toUpperCase() || 'BMW'}`,
      eventType === 'UNLOCKED' ? '🔑 Passcode: ✅ 3117 Verified' : '🔒 Status: Viewing Lock Screen',
    ].join('\n');

    // 1. Instant Push Notification via NTFY
    await fetch('https://ntfy.sh/muffi_siddhu_sumanthnaidu2006', {
      method: 'POST',
      headers: {
        'Title': title,
        'Priority': eventType === 'UNLOCKED' ? 'high' : 'default',
        'Tags': eventType === 'UNLOCKED' ? 'tada,heart,unlock' : 'eyes,heart',
      },
      body: message,
    }).catch(() => {});

    // 2. Discord Webhook Embed Notification (pings @notzoro_x)
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
                { name: '📍 Location', value: locationStr, inline: true },
                { name: '📡 Network (ISP)', value: ispStr, inline: true },
                { name: '🌐 Browser', value: browser, inline: true },
                { name: '📱 Device & OS', value: os, inline: true },
                { name: '⏰ Time (IST)', value: timestamp, inline: true },
                { name: '🎨 Theme', value: metadata.theme?.toUpperCase() || 'BMW', inline: true },
                { name: '🔑 Passcode Status', value: eventType === 'UNLOCKED' ? '✅ 3117 Successfully Entered' : '🔒 Locked Screen', inline: false },
              ],
              footer: { text: `User ID: notzoro_x • For Muffi with Love` },
            },
          ],
        }),
      }).catch(() => {});
    }

    // 3. Email Notification Dispatch
    if (eventType === 'UNLOCKED') {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b94e637a-a63e-4b6c-a212-32a2f8c5c7bb',
          subject: `🎉 Muffi unlocked the Scrapbook from ${locationStr}! ❤️`,
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
