#!/usr/bin/env python3
import sys
import qrcode
import argparse
from PIL import Image

if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description="Generate QR code for the released PDF of the songbook."
    )
    parser.add_argument('release_tag', help='Tag name of the release, which will be spliced into the permalink')
    args = parser.parse_args()

    tag = args.release_tag
    link = f'https://github.com/dzierzanowski/spiewnik-szant/releases/download/{tag}/spiewnik.pdf'
    print(f'Generating QR code for: {link}')

    logo = Image.open('images/kolo-qr.png')
    logo.resize((1, 1))
    qr = qrcode.QRCode(
        #version=12,
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=30,
        border=1
    )
    qr.add_data(link)
    qr.make()
    qr = qr.make_image()
    pos = (
        (qr.size[0] - logo.size[0]) // 2,
        (qr.size[1] - logo.size[1]) // 2
    )
    qr.paste(logo, pos)
    qr.save('images/qr.png')
    sys.exit(0)
