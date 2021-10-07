import urllib.request
from bs4 import BeautifulSoup
from out_data import courses
import os
import json

print(len(courses))

def get_courses(programme_link):
  courses = []

  page = urllib.request.urlopen(programme_link).read().decode('utf-8')
  soup = BeautifulSoup(page, features="html.parser")

  item_list = soup.body.find_all('h4', attrs={'class' : 'list-group-item-heading'})

  for item in item_list:
    [course_code, course_name] = item.text.strip().split(' ', 1)
    course_link = 'https://egyankosh.ac.in' + item.find('a').get('href')
    courses.append((course_code, course_name, course_link))

  return courses

def get_blocks(course_link):
  blocks = []

  page = urllib.request.urlopen(course_link).read().decode('utf-8')
  soup = BeautifulSoup(page, features="html.parser")

  item_list = soup.body.find_all('h4', attrs={'class' : 'list-group-item-heading'})

  for item in item_list:
    block = item.text.strip().split(' ', 1)
    if len(block) == 2:
      [block_code, block_name] = block
    elif len(block) == 1:
      block_code = block[0]
      block_name = ''
    else: continue
    block_link = 'https://egyankosh.ac.in' + item.find('a').get('href')
    blocks.append((block_code, block_name, block_link))

  return blocks

def get_units(block_link):
  units = []

  page = urllib.request.urlopen(block_link).read().decode('utf-8')
  soup = BeautifulSoup(page, features="html.parser")
  
  table = soup.body.find('table', attrs={'class' : 'table'})
  tr_list = table.find_all('td', attrs={'headers' : 't2'})
  tr_list.reverse()

  for tr in tr_list: 
    [unit_code, unit_name] = tr.text.split(' ', 1)
    unit_link = 'https://egyankosh.ac.in' + tr.find('a').get('href')
    units.append((unit_code, unit_name, unit_link))

  return units

# print(get_courses('https://egyankosh.ac.in/handle/123456789/410'))
# print(get_blocks('https://egyankosh.ac.in/handle/123456789/452'))
# print(get_units('https://egyankosh.ac.in/handle/123456789/1600'))


save_path = '/home/robin/projects/ignou-app/api/src/populateDB/course/study_material'
file_name = 'course_with_blocks.json'
file_path = os.path.join(save_path, file_name)
with open(file_path, 'w') as file: 
  file.write('[\n')
  count = 1
  for course in courses:
    print('extracting', count, 'course...')
    count += 1
    blocks = get_blocks(course["courseLink"])
    course["blocks"] = blocks
    file.writelines(json.dumps(course) + ',\n')
  file.write(']')

  

