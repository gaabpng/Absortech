<br>

<div align="center">

<img src="Absortech.svg" width="300">

  <p align="center">
    <strong>Dignity and discretion.</strong>
  </p>


[![pt-BR](https://img.shields.io/badge/lang-pt--BR-green.svg)](./docs/README.pt-BR.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)

</div>

## Table of Contents

- [About](#about)
- [Technologies used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Build your own](#build-your-own)
- [Website](#website)
- [Contributors](#contributors)

## About

**Absortech** is a project developed by IEEE UFF to achieve the **free distribuition** of menstrual pads with the help of **digital monitoring**.
<br>

The pads are stored in boxes and, through a distance sensor which sends the data to a website, tells if the box is empty or full (or somewhere in between). This way, it's easy to monitor when it's time to refill it without constant manual checking.

Plus, the website is also meant for people who need a pad to go to where the box is guaranteed to not be empty, which avoids wasting time and frustration.

Moreover, Absortech will distribute these items free of charge, looking to help with menstrual hiegiene. 

## Technologies used


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width=40px/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" width=40 /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" width=40/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width = 40 /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width = 40 /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width = 40/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width = 40/>
          
          
          
          
          
          
          

## Features

- Check how full the boxes are
- See location of boxes


## Installation

To install the necessary frameworks, run the following line of code:
```
pip install -r requirements.txt
```


## Project Structure

The imagem below provides an overview of how Absortech works 

![alt text](image.png)

## Build your own
In order to replicate this yourself, make sure you have an ESP32 and the HC-SR04 sensor and follow this schematic:

![Schematic_Absortech_2025-02-26.png](https://github.com/gaabpng/Absortech/blob/main/ESP-32/Schematic_Absortech_2025-02-26.png))

When you run ultrasom.ino the distance (which is measured in cm) is correct and ajdust the empty/full calculations to whatever works best for you.

## Website
Still in the making! Meanwhile, enjoy these preview images

![image](https://github.com/user-attachments/assets/915cb1be-3204-4811-8952-ea53ce6bb475) 
![image](https://github.com/user-attachments/assets/012f59c1-43db-4714-8ea1-28841bf5c9d7)




## Contributors

<a href="https://github.com/gaabpng/Absortech/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=gaabpng/Absortech" />
</a>
