import { NextResponse } from 'next/server';
import menuItems from 'menu-items';

export async function GET() {
    return NextResponse.json({ dashboard: menuItems });
}
