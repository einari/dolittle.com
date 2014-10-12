$(function() {
    var viewModel = function() {

        this.thumbnails = ['logo',1,2,3,4];

        // this.showImage = function(project, imageNumber) {
        //     var image = document.querySelector("#activeImage");
        //     image.src = "references/"+project+"/"+imageNumber+".png";
        // };

        this.isRight = function(index){
            index = ko.unwrap(index) || 0;
            return index % 2 !== 0;
        }

        this.projects = [
            {
                title: "JottaCloud Windows Phone",
                description: "A Windows Phone 8.1 implementation for the popular Norwegian based on-line backup, file-sharing and file synchronization service provider.",
                tags: [
                    "Bifrost", "Yggdrasil", "CSharp", ".net", "Windows Phone 8.1", "XAML", "MVVM", "Behavior Driven Development", "Ruby Rake"
                ]
            },
            { 
                title: "ProCoSys",
                description: "A key line of business application for Statoil.  ProCoSys manages projects from commissioning through preservation to completion.  It is used for on- and off-shore and sub-sea plants.  The application was required to be highly scalable, capable of dealing with a current worldwide userbase of 50,000 users with scope for growth.",
                tags: [
                    "Bifrost", "CSharp",".net","JavaScript","NHibernate","ASP.net MVC","KnockoutJS","Oracle11",
                    "CQRS", "MVVM", "MVC", "Single Page Application", "Domain Driven Design", 
                    "Behavior Driven Development", "Scrum", "TFS", "GIT"
                ]
            }, 
            {
                title: "Mendo",
                description: "A custom application designed to connect merchants, advertising agents and media channels so as to improve user productivity and provide decision support in relation to advertising and marketing campaigns.  A centralized hub for marketing related activities, it went from concept to prototype to working software in a matter of weeks.",
                tags: [
                    "Bifrost", "Forseti", "CSharp", ".net", "JavaScript", "NHibernate", "HTML5", "CSS", "LESS", "MongoDB", "Azure",
                    "CQRS", "MVVM", "Single Page Application", "Domain Driven Design", "Behavior Driven Development", "Agile", "GIT", "Cloud"
                ]
            },
            {
                title: "Klassequizen",
                description: "A primetime TV gameshow that runs on Norway's national broadcaster.  The software managed all aspects of the game, from allowing contestants to submit answers, to marking of these answers by the judges and the display of results.",
                tags: [
                    "Bifrost", "CSharp", ".net", "JavaScript", "MVVM", "SignalR", "Behavior Driven Development", "RavenDB"
                ]
            },
            {
                title: "Komplett",
                description: "From the inital goal of creating a mobile friendly website for the e-commerce giant, the project grew to building a unified platform capable of hosting all Komplett brands, in all countries and on all platforms.",
                tags: [
                    "Bifrost", "CSharp", ".net", "JavaScript", "NHibernate", "ASP.net MVC", "KnockoutJS", "SQL Server",
                    "CQRS", "MVVM", "MVC", "Domain Driven Design", "Behavior Driven Development", "SCRUM", "GIT", "SAP PI", "SAP IDOC",
                    "NServiceBus", "WCF"
                ]
            },
            {
                title: "Shubert Ticketing",
                description: "An interactive, realtime, 3D booking system on the web, allowing customers to view and book seats for cinema, plays and other performances.  An administration tool allows the modelling of new theatres and locations.  The 3D element was based on Balder, our open-sourced 3D engine.",
                tags: [
                    "Balder", "CSharp", ".net", "Silverlight", "MVVM", "3D", "Behavior Driven Development"
                ]
            },
            {
                title: "Blomsterdekor",
                description: "E-Commerce frontend built on top of Magento running in the cloud. Built together with a partner (Fludo) were we were responsible for establishing most of the backend and integration points with Magento and the frontend library, built on top of Bifrost.",
                tags: [
                    "Bifrost", "CSharp", ".net", "JavaScript", "MongoDB", "HTML5", "CSS", "Magento", "CQRS", "MVVM", "KnockoutJS", "Behavior Driven Development", "AppHarbor", "Cloud"
                ]
            },
            {
                title: "Imatis Visi",
                description: "A resource organization, planning and monitoring tool for the healthcare sector.  It's main function is to plan and organize rooms, beds and assign staff.  It also tracks key patient details such as special requirements, alarms for medicines and other critical responsibilities.",
                tags: [
                    "Bifrost", "CSharp", ".net", "Silverlight", "NHibernate", "ASP.net", "SQL Server", "SignalR",
                    "MVVM", "TFS", "WCF"
                ]
            },
            {
                title: "De Ukjente",
                description: "A primetime TV gameshow that ran for 3 seasons.  Teams of celebrities would use our Microsoft PixelSense multitouch table application to organize and collate information allowing them to guess the profession of six 'unknowns'..",
                tags: [
                    "CSharp", ".net", "WPF", "PixelSense", "Behavior Driven Development", "TCP / UDP"
                ]
            }

        ];

        this.getBackgroundColor = function(index) {

            return index()%2 == 0 ? "#ddd" : "#eee";

        };

    };


    ko.applyBindings(new viewModel(), document.getElementById("references"));
});