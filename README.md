# blog-django-react


<h1 align="center">
  <br>
   <img src="https://github.com/davidncuba/blog-django-react/blob/8f11b082d36160f04ae3c6f2e57c66b274c110ad/blog.png" alt="Blog" width="800"></a>
  <br>
Blog Django React  
  <br>
</h1>

<h4 align="center">Build with</h4>

<p align="center">
  <img align="center" alt="David-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
   <img align="center" alt="David-Django" height="30" width="40" src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white">

 


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) and [Python3](https://www.python.org/downloads/):

```bash
# Clone this repository
$ git clone https://github.com/davidncuba/blog-django-react.git

# Go into the repository
$ cd blog-django-react

# Install dependencies React
$ cd frontend
$ yarn

# Install dependencies React
$ cd ..
$ cd backend
$ python3 -m venv env
$ source env/bin/activate
$ pip install -r requirements.txt
$ python manage.py migrate    
$ python manage.py createsuperuser
$ python manage.py runserver

# Run the app
# Backend
$  python manage.py runserver 

# Frontend(you need 2 terminal)
$ cd frontend
$ yarn start
```

