import json
import os
import urllib.request

from bs4 import BeautifulSoup


def get_courses(school_link):
  courses = []

  resource = urllib.request.urlopen(school_link)
  page = resource.read().decode('windows-1252')
  soup = BeautifulSoup(page, features="html.parser")
  links = soup.body.find_all('a')

  for link in links:
    href = link.get('href')
    if not href:
      continue
    if '.pdf' not in href:
      continue
    items = href.split('/')
    programme_code = items[0]
    course_code = items[1].split('.')[0]
    course = {
      'course_code': course_code,
      'question_paper_url': href,
      'programme_code': programme_code,
    }
    courses.append(course)
    print(course)

  return courses

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
      print(href)
  
  return school_links

def save_couses(data):
  save_path = '/home/robin/projects/ignou-app/api/src/populateDB/course/question_papers'
  file_name = 'courses.json'
  file_path = os.path.join(save_path, file_name)
  with open(file_path, 'w') as file:
    json_data = json.dumps(data)
    file.write(json_data) 

# get_courses('https://webservices.ignou.ac.in/Pre-Question/Question%20Paper%20December%202020/SOMS/soms.htm')
get_school_links('https://webservices.ignou.ac.in/Pre-Question/Question%20Paper%20December%202020/QPDecember2020.htm')
