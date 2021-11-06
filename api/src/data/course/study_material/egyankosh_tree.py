import json
import os
import re
import urllib.request

from bs4 import BeautifulSoup


def extract_egyankosh_tree(egyankosh_tree_link):
  page = urllib.request.urlopen(egyankosh_tree_link).read().decode('utf-8')
  soup = BeautifulSoup(page, features="html.parser")
  slm = soup.select_one('#content > div:nth-child(4) > ul > li:nth-child(2) > div > ul')
  a_list = slm.select('a')

  data = []
  for a_el in a_list:
    a_el_str = str(a_el)
    if 'Block-' in a_el_str: continue
    course_regex = '[A-Z]+-?\s*\d+'
    is_course = re.search(course_regex, a_el_str)
    if is_course: 
      course_text_link_tuple = get_course_text_link_tuple(a_el)
      data.append(course_text_link_tuple)
  return data

def get_course_text_link_tuple(course_a_el):
  course_text = course_a_el.text.strip()
  course_link = course_a_el.get('href')
  return (course_text, course_link)

def clean_data(in_data):
  out_data = []
  for (course_text, course_link) in in_data:
    (code, name) = separate_course_code_name(course_text)
    new_code = clean_code(code)
    out_data.append((new_code.strip(), name.strip(), course_link))
  return out_data
  
def clean_code(code):
  regex = re.compile('([A-Z]+)\s*-?\s*(\d+)')
  match = regex.match(code)
  (a, b) = match.groups()
  return a + '-' + b
  
def separate_course_code_name(course_text):
  split_regex = "[A-Z]+-?\s*\d+"
  x = re.search(split_regex, course_text)
  code = course_text[x.start():x.end()]
  name = course_text[x.end():]
  return (code, name)

def save_to_file(data):
  save_path = '/home/robin/projects/ignou-library/api/src/data/course/study_material'
  file_name = 'out_data.json'
  file_path = os.path.join(save_path, file_name)
  with open(file_path, 'w') as file:
    json_data = json.dumps(data)
    file.write(json_data)

def orgranize_duplicates(in_data):
  out_data = {}
  for (code, name, link) in in_data:
    if code not in out_data:
      out_data[code] = [(name, link)]
    else:
      out_data[code].append((name, link))
  return out_data

def save_after_organizing(data):
  save_path = '/home/robin/projects/ignou-library/api/src/data/course/study_material'
  file_name = 'organized_out_data.json'
  file_path = os.path.join(save_path, file_name)
  with open(file_path, 'w') as file:
    json_data = json.dumps(data)
    file.write(json_data)

raw_data = extract_egyankosh_tree('file:///home/robin/ignou/ignou-library/eGyanKoshTree.html')
cleaned_data = clean_data(raw_data)
save_to_file(cleaned_data)
org_data = orgranize_duplicates(cleaned_data)
save_after_organizing(org_data)
