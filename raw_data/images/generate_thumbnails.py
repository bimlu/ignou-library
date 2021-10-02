from typing import Optional
from PIL import Image
import os

# image = Image.open('./programme/acise.jpeg')
# print(image.size)
# image.thumbnail(size=(16, 16))
# image.save('./programme_thumbnails/acise.jpeg', optimize=True, quality=80)

# thumbnail = Image.open('./programme_thumbnails/acise.jpeg')
# print(thumbnail.size)

images = [file for file in os.listdir('./programme')]
for image in images:
  img = Image.open('./programme/' + image)
  img.thumbnail((16, 16))
  img.save('./programme_thumbnails/' + image, optimize=True, quality=80)
  print('resized ' + image)