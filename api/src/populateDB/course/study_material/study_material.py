import urllib.request
from bs4 import BeautifulSoup
import os
import json

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
  if not table: return []
  tr_list = table.find_all('td', attrs={'headers' : 't2'})
  tr_list.reverse()

  for tr in tr_list: 
    unit = tr.text.split(' ', 1)
    if len(unit) == 2:
      [unit_code, unit_name] = unit
    elif len(unit) == 1:
      unit_code = unit[0]
      unit_name = ''
    else: continue
    unit_link = 'https://egyankosh.ac.in' + tr.find('a').get('href')
    units.append((unit_code, unit_name, unit_link))

  return units

# print(get_courses('https://egyankosh.ac.in/handle/123456789/410'))
# print(get_blocks('https://egyankosh.ac.in/handle/123456789/452'))
# print(get_units('https://egyankosh.ac.in/handle/123456789/1600'))
def extract_blocks_and_save():
  with open('out_data.saved.json', 'r') as in_file:
    json_data = in_file.read()
    obj_data = json.loads(json_data)

  save_path = '/home/robin/projects/ignou-app/api/src/populateDB/course/study_material'
  file_name = 'course_with_blocks.json'
  file_path = os.path.join(save_path, file_name)
  with open(file_path, 'w') as file: 
    file.write('[\n')
    count = 1
    for course in obj_data:
      print('extracting', count, 'course...')
      count += 1
      blocks = get_blocks(course[2])
      course.append(blocks)
      file.writelines(json.dumps(course) + ',\n')
    file.write(']')

def extract_units_and_save():
  with open('course_with_blocks.json', 'r') as in_file:
    json_data = in_file.read()
    obj_data = json.loads(json_data)

  save_path = '/home/robin/projects/ignou-app/api/src/populateDB/course/study_material'
  file_name = 'extracted_units.json'
  file_path = os.path.join(save_path, file_name)
  with open(file_path, 'w') as file: 
    file.write('[\n')
    course_count = 1
    for course in obj_data:
      print('course', course_count)
      course_count += 1
      block_count = 1
      blocks = course[3]
      new_blocks = []
      for block in blocks:
        print('\textracting', block_count, 'block...')
        block_count += 1
        block_link = block[2]
        units = get_units(block_link)
        block.append(units)
        new_blocks.append(block)
      course[3] = new_blocks
      out_data = json.dumps(course)
      file.writelines(out_data + ',\n')
    file.write(']')

def organize_dups_in_extracted_units():
  with open('extracted_units.json', 'r') as in_file:
    json_data = in_file.read()
    obj_data = json.loads(json_data)
    out_data = {}
    for (code, name, link, blocks) in obj_data:
      if code not in out_data:
        out_data[code] = [(name, link, blocks)]
        print(code)
      else:
        out_data[code].append((name, link, blocks))

  # save out_data to a file
  save_path = '/home/robin/projects/ignou-app/api/src/populateDB/course/study_material'
  file_name = 'organized_units.json'
  file_path = os.path.join(save_path, file_name)
  with open(file_path, 'w') as file:
    json_data = json.dumps(out_data)
    file.write(json_data)  
  
# extract_units_and_save()
organize_dups_in_extracted_units()