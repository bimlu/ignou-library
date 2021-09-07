import os
import re

file = open('course-catalog.csv', 'r')

data = file.read()
file.close()

print('data length: ', len(data))

trimmedData = data.replace(',', ' ')

courses_short = re.findall('\d+\.[^\d][\(\)\-\da-zA-Z]*', trimmedData)

courses_long = re.findall('\d+\.[^\d][\(\)\-\da-zA-Z]*[\(\)\"\'\sa-zA-Z]+', trimmedData)

courses = courses_long

print('courses length: ', len(courses))

course_list = []

for line in courses:
  # remove whitespaces at begining and end
  stripped_line = line.strip()
  # remove whitespaces with a single space character
  stripped_line = re.sub('\s+', ' ', stripped_line)
  # remove serial number
  stripped_line = re.sub('\d+\.\s?', '', stripped_line) 
  # remove "
  stripped_line = re.sub('\"', '', stripped_line)
  # print(stripped_line)
  # split code and title
  course = stripped_line.split(' ', 1)
  # print(course)
  if len(course) == 1:
    course_code = course[0]
    course_title = ''
  elif len(course) == 2:
    [course_code, course_title] = course
  else:
    raise NameError('couldn\'t split line')    
  # print(course_code, course_title)
  crs = { 'code': course_code, 'title': course_title }
  if crs not in course_list:
    course_list.append(str(crs))
    course_list.append(',\n')

out_file = open('courses_list.js', 'w')
out_file.write('export const courses = [\n')
out_file.writelines(course_list)
out_file.write('\n]')
out_file.close()
