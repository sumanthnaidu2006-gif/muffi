/**
 * Visitor Logger & Instant Phone Notification Dispatcher
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

    // 1. Instant Push Notification via NTFY (Free, Instant Push to your phone!)
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

    // 2. Email Notification Dispatch to sumanthnaidu2006@gmail.com via Web3Forms API
    if (eventType === 'UNLOCKED') {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b94e637a-a63e-4b6c-a212-32a2f8c5c7bb', // public notification relay
          subject: `🎉 Muffi unlocked the Scrapbook at ${timestamp}! ❤️`,
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
