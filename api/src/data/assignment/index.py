import json
import os


def organize_programmes():
  with open('programme.txt', 'r') as in_file:
    lines = in_file.readlines()
    lines = sorted(lines, key=lambda x: '__' not in x, reverse=True)
    lines = sorted(lines, key=lambda x: '_H' not in x, reverse=True)
    programmes = {}
    programmes_termwise = {}
    for line in lines:
      line = line.strip()
      # print(line)
      programme = line.split('.')[0]
      if '_' not in programme:
        programmes[programme] = ['main']
      elif '_1' in programme:
        continue
      elif '_H' in programme and '__' not in programme:
        programme = programme.split('_')[0]
        if programme in programmes:
          programmes[programme].append('hindi')
        else:
          programmes[programme] = ['hindi']
    
   # save courses to a file
  save_path = '/home/robin/projects/ignou-library/api/src/data/assignment'
  file_name = 'programme2.json'
  file_path = os.path.join(save_path, file_name)
  with open(file_path, 'w') as file:
    json_data = json.dumps(programmes)
    file.write(json_data) 

def orgranize_courses():
  with open('course.txt', 'r') as in_file:
    lines = in_file.readlines()
    lines = sorted(lines, key=lambda x: '_' in x)
    # print(lines)
    courses = {}
    for line in lines:
      line = line.strip()
      course = line.split('.')[0]
      if '_' not in course: 
        courses[course] = ['main']
      elif '_1' in course:
        continue
      else:
        course = course.split('_')[0]
        if course in courses:
          courses[course].append('hindi')
        else:
          courses[course] = ['hindi']
    # print(courses)

  # save courses to a file
  save_path = '/home/robin/projects/ignou-library/api/src/data/assignment'
  file_name = 'course2.json'
  file_path = os.path.join(save_path, file_name)
  with open(file_path, 'w') as file:
    json_data = json.dumps(courses)
    file.write(json_data) 

# orgranize_courses()
# organize_programmes()
