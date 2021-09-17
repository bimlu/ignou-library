import re

from school_course_mapping import school_with_possible_courses

with open('course_catalog.csv', 'r') as in_file:
  data = in_file.read()

trimmed_data = data.replace(',', ' ')
# To visualize: re.findall('\d+\.[^\d][\(\)\-\da-zA-Z]*', trimmed_data)
trimmed_data = re.findall('\d+\.[^\d][\(\)\-\da-zA-Z]*[\(\)\"\'\sa-zA-Z]+', trimmed_data)

course_list = []

def get_school_code(course_code, school_courses):
  for school_code in school_courses:
    possible_course_codes = school_courses[school_code]
    for possible_course_code in possible_course_codes:
      if course_code.startswith(possible_course_code + '-'):
        return school_code

for line in trimmed_data:
  # remove whitespaces at begining and end
  line = line.strip()
  # remove whitespaces with a single space character
  line = re.sub('\s+', ' ', line)
  # remove serial number
  line = re.sub('\d+\.\s?', '', line) 
  # remove "
  line = re.sub('\"', '', line)
  # print(line)
  # split code and title
  code_and_title = line.split(' ', 1)
  if len(code_and_title) == 1:
    course_code = code_and_title[0]
    course_title = ''
  elif len(code_and_title) == 2:
    [course_code, course_title] = code_and_title
  else:
    raise NameError('couldn\'t split line')    
  # print(course_code, course_title)
  school_code = get_school_code(course_code, school_with_possible_courses)
  course_dict = { 'code': course_code, 'title': course_title, 'school': school_code }
  if course_dict not in course_list:
    course_list.append(str(course_dict))
    course_list.append(',\n')

with open('course_list.js', 'w') as out_file:
  out_file.write('export const courses = [\n')
  out_file.writelines(course_list)
  out_file.write('\n]')
