import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, contact, phone, message } = data;
    
    // Telegram Bot token и ID чата (замените на ваши)
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!botToken || !chatId) {
      return NextResponse.json(
        { success: false, message: 'Отсутствуют настройки Telegram бота' },
        { status: 500 }
      );
    }

    // Отправка сообщения боту
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramData.ok) {
      throw new Error(telegramData.description || 'Ошибка отправки в Telegram');
    }

    return NextResponse.json(
      { success: true, message: 'Сообщение успешно отправлено' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return NextResponse.json(
      { success: false, message: 'Произошла ошибка при отправке сообщения' },
      { status: 500 }
    );
  }
}
