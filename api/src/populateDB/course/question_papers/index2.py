import json
import os
import urllib.request

from bs4 import BeautifulSoup


def get_course_qnpaper_list(school_link):
  course_qnpaper_list = []

  resource = urllib.request.urlopen(school_link)
  page = resource.read().decode('windows-1252')
  soup = BeautifulSoup(page, features="html.parser")
  links = soup.body.find_all('a')

  hrefs = []
  for link in links:
    href = link.get('href')
    if not href:
      continue
    if '.pdf' not in href:
      continue
    hrefs.append(href)
  
  for href in hrefs:
    items = href.split('/')
    course_code = items[1].split('.')[0]
    course_qnpaper = {
      'course_code': course_code,
      'question_paper_link': href,
    }
    course_qnpaper_list.append(course_qnpaper)
    # print(course_qnpaper)

  return course_qnpaper_list

def get_school_links(year_link):
  school_links = []

  resource = urllib.request.urlopen(year_link)
  page = resource.read().decode('windows-1252')
  soup = BeautifulSoup(page, features="html.parser")
  links = soup.body.find_all('a')

  for link in links:
    href = link.get('href')
    if not href:
      continue
    if '.htm' not in href:
      continue
    if href not in school_links:
      school_links.append(href)
      # print(href)
  school_links.append('STRIDE/stride.htm')
  
  return school_links

def write_to_file(data):
  save_path = '/home/robin/projects/ignou-library/api/src/populateDB/course/question_papers'
  file_name = 'course_qnpaper_list.json'
  file_path = os.path.join(save_path, file_name)
  with open(file_path, 'a') as file:
    file.write(data)

def truncate_end_comma():
  save_path = '/home/robin/projects/ignou-library/api/src/populateDB/course/question_papers'
  file_name = 'course_qnpaper_list.json'
  file_path = os.path.join(save_path, file_name)
  with open(file_path, 'ab') as file:
    file.seek(-1, os.SEEK_END)
    file.truncate()

# get_course_qnpaper_list('https://webservices.ignou.ac.in/Pre-Question/Question%20Paper%20December%202020/SOMS/soms.htm')
# get_school_links('https://webservices.ignou.ac.in/Pre-Question/Question%20Paper%20December%202020/QPDecember2020.htm')

def extract_question_paper_link():
  school_links = get_school_links('https://webservices.ignou.ac.in/Pre-Question/Question%20Paper%20December%202020/QPDecember2020.htm')
  write_to_file('[\n')

  print('start extraction...')
  for school_link in school_links:
    print('school link', school_links.index(school_link) + 1)
    url = 'https://webservices.ignou.ac.in/Pre-Question/Question%20Paper%20December%202020/'
    course_qnpaper_list = get_course_qnpaper_list(url + school_link)

    for course_qnpaper in course_qnpaper_list:
      print('\tcourse_qnpaper', course_qnpaper_list.index(course_qnpaper) + 1)
      json_data = json.dumps(course_qnpaper)
      write_to_file('\t' + json_data + ',\n')
  
  truncate_end_comma()
  write_to_file(']')


extract_question_paper_link()
