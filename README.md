# OfficeMail
Office Mail


A Simple Demo With Angular 2.

    a) Angular 2 version Beta 0.17
    b) Typescript
    c) Jamine testing

Delplyment and Running Envirentment Request:

(1) Get source codes
    a) Download from the github website, or
    b) run git command:  git clone https://github.com/kevinchen278/OfficeMail.git
    
    
(2) Deployment
    a) Go into the project folder, run command: npm install
    b) Run the application : npm start,  it will launch the application main page.
    c) Run test spec: npm test,   it will run all the test specs and display the test result in the webpage.
  
    
    
(3) Application Structure

    mail(applicatioin folder)  ---------\css--  
                                     |    |----styles.less
                                     |    |----styles.css -----   This is global css file for all the modules in the applicaiton.
                                    README.MD   --------------    This readme file, the document describes the application.
                                    index.html  ---------------   Main page
                                    packages.json  ------}   
                                    tsconfig.json -------}
                                    typings.json  -------}------- setting and config files. 
                                    systemjs.config.js---}
                                    unit-test.index ------------- The entry of testing, the test specs files put in the associate folders.
                                        \mail\--
                                              | 
                                              |-main.ts -------    The main file to bootstrap the main component AppComponent
                                                
                                              \-Components ---     Includes all components for this appliation.
                                                     |
                                                     \app
                                                        |-app.component.ts  ---- the main component (AppComponent for the application)
                                                     \master
                                                        |-master.component.ts -- Home page component.
                                                     \user
                                                       |-user.component.ts   --- User component for user page.
                                                     \logout
                                                       |-logout.component.ts --- logout component for logout page.
                                              |         
                                              \-Directives  -------- Includes all the directives in the application.
                                                    \-list
                                                       |-list.mail.directive.ts ---- for displaying the mail list.
                                                    \-detail
                                                       |-list.detail.directive.ts --- for displaying the mail detail.
                                                       
                                             \-Services ---------- Includes all the Application Logics and Data.
                                                 |-mock.mails.ts-- for generating mock mails.
                                                 |-mail.ts ------- Include mail object and mail-operation object (MailList object)
                                                 |-mail.service.ts--Mail service for providing the data. (not use here).
                                                 |-mail.spec.ts---- for tesing mail.ts unit.
                                                 |-mail.service.spec.ts --- for testing mail.service.ts unit.
                                                 
(4) Testing and notes.

    a) Unit testing is based on the Jasmine framework,
    b) unit-test.index is the entry,
    c) according to the advice with Angular 2, the specs files put on the associated folder, do not put in the separated test folder.
    d) Components and directives are important techs for modularizing angular2 application. 
       Component Class is used to connect UI(view) and the application logics and data, 
       the best practics are to make the Component class as simple (thin) as you can. Put all the application logics into services. 
       This make the code testable and maintainable. 
    e) In this simple applicaiton, the main component is MasterComponent (for main page), but it only include a few lines. 
       The main implementation is located in the mail.ts and mock.mail.ts.
    f) In Angular 2, the scoped scoped styles (Shadow DOM) is introduced, it is really awesome.  So the modular style is put in the   
       associated component folder or embeded in the component.ts file. 
       Also there is a global style in application folder\css\style.less(css) for every module.
       
       
       
Author:  Kevin Chen

Contact: kevin.chen278@gmail.com

Date: 8-May-2016.
    
                                             
                                             
                                    
                                    
                                    
  


    
    

