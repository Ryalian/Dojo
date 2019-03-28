This code is used for West LA Kendo Dojo website. All rights reserved by West LA Kendo Dojo.

The result can be viewed from: http://www.wlakendo.org/

Guide:
The site is build with create-react-app for building React single page application. In order to use it on a apache CMS service, React-snapshot was used for generating page files for each route.

In order to put it up online, developer needs to first run build script in the-dojo folder then transfer all the files in 'build' folder into server through sftp.

Notice that the project we originally using nodejs to serve the frontend. However, after discussion we decided to keep the CMS service and only use the generated files. So the nodejs code is just used for development puporse.