import { NextRequest, NextResponse } from "next/server";
import admin, { ServiceAccount } from 'firebase-admin';

interface NotificationData {
    data: {
        title: string;
        body: string;
        image: string;
        icon:string;
        click_action: string;
    },
    token: string
}

const sendFCMNotification = async (data: NotificationData) => {
    const serviceAccount: ServiceAccount = {
        projectId: 'test3-63f0e',
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmbBkw3T30959N\n/9Y2jCPQcASy3AuHONUt2z3ojkuEnX6Hn8TtW6OsJKAF7Pvskl70FfrRc+MT+B9J\n2w8OCIhTIc49091QcAgfWZF5L1gm56KJELTGXzzdAUF+2a6iNb/pf2G8nQEAsj6O\nm0GhdNeh5QX7aI5dndrHoxFW52Mc+udVW6a2bUZ6In0l79wvAOV2ywrx+087r2Gn\nwbrhxHB9LOsZL49tdqtwzJKZNaRXMMfZUW7p1nxPAUnG2LxEpnINSGdACFxgpzux\nk3/99PO2OEaQ9Xl1Un4p7jcxim48ybB4TNqgVqjunP8qqXOH9xR56O0wu7Dwz0/Q\nFBxNFng/AgMBAAECggEAB7MIl1IlA6hRHnKvnmZtYb9M+FllzyO5+R0jiBbNN51x\ntSSXH8QVlmk7XgrQvOkoq3I44GfUIaBhEjGoSKXsaKwvtnyOyKHmPk0OheTC10nw\nIxc6xdKyJidguFWp1qdV8Z+LDgbVfQrCCib0qluVfk/yLudvbrVW4dWRf8vEshp2\naKWo03XnF1gyFAo+ANpPD+lfCaDpY0TD3vPuHGmGYqJaSkaFJUIUJb+CmL1bbdjm\nni6l4eeeWKS53mAVXxAjKElTkMZSLA/kxBH8vxTNQ8o36cXYrcP4B6xwL2hS4MjG\nao5xZ75SmenmD1+EtxSM0Tm8GKcZMsdFyc2xwWXIAQKBgQDaIjEyCbrVmqhd2k3f\nXkoY9V54LP2PNRfaHgvBpGBf/oJAm4myzmljKR0+Qz1uL0aq1GNqCwSiE7poaXG8\nDgrRoVwMgi1WmPxFB6MT1vT1tWA9ZCOG77m+jswXo/z7vP+Y1V0vrJFgZqjXBXfy\nhL61OCMR3egnPS7JF1hZIWaqvwKBgQDDT94BE3l8lpZfG09ooLrb2oxoozjvoW25\nNUt/oLbo94MSy+7cTWLygtESy4D6cdmGd/02IebFRSY+/f9WvpYJFRXoaUN4aEDY\nm9wW9DWphUcsozcPQwJOfw/l0GFZad2/i49q772nwFAFluAadfEembSFVpv+ZejA\nuHB8UucSgQKBgQDOcAOM7oZiNw7WW47NMUgA3N597148VKvxIfRQW8dVseEFUe38\nSbqVPMjPLwWJLLa9X2mCZ1EILpGA1SHtLoDwqbwanmxYA0rj7XlZglqr2u5sy0OQ\nJXntLOlcCjeW6uQeePbK8o9W43EwpZ1B6H0vtiQCebeGwzFu4GgdWi32swKBgDN4\nfcH81tw9dx1TPicNjJDZ1HzS3vNPsHHJmL7mpK1aZQF0GtuVzUiprt1sIe5eSHwG\nbQVyA7XjFkQtfbfne/SiyOY5r10w5D3xPRwTeXzWMb6SuLTd7OKw24it1KnSm2ya\nI86DpZBqvuvqKd7vS/7LdOZav7tYMfFv6bzpwBmBAoGAULK8gdxuvbf1UjY9l40+\nxZNTU4d/fqC4TtC6ZUAQ9ERcDRPrMdrQTtu4ljwly+nu+WNad2MMFgLIoOW5Xwt3\nZAMuXGpZnzlxhTiMv2zJjQ1GV8k/xSrAq1fjKngEd/sa7CEwP0NEtDXgUKP6K7Xw\nXPyO5a5nw0bF44NQAZiANTU=\n-----END PRIVATE KEY-----\n",
        clientEmail: "firebase-adminsdk-fd05h@test3-63f0e.iam.gserviceaccount.com",
    };

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    }

    const res = await admin.messaging().send(data);
    return res;
};

export async function POST(req: NextRequest) {  
    const { message } = await req.json();
    const fcmNoti = await sendFCMNotification(message);
    return NextResponse.json([]);
};
