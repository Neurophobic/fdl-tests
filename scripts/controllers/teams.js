'use strict';

/**
 * @ngdoc function
 * @name fdlApp.controller:TeamsCtrl
 * @description
 * # TeamsCtrl
 * Controller of the fdlApp
 */
angular.module('fdlApp')
    .controller('TeamsCtrl', function ($scope, $route) {
        $scope.$route = $route;

        $scope.isMentor = function (people) {
            return people.hasOwnProperty('mentor');
        };


        $scope.showBio = false;
        $scope.clickBio = function (people) {
            // $scope.showBio = !$scope.showBio;

            if (people.team === 'new tools') {
                angular.forEach($scope.newTools, function (value) {
                    value.featured = false;
                });
            } else if (people.team === 'new approaches') {
                angular.forEach($scope.newApproaches, function (value) {
                    value.featured = false;
                });
            } else {
                angular.forEach($scope.newDiscoveries, function (value) {
                    value.featured = false;
                });
            }



            people.featured = true;


        };



        $scope.newTools = [

            {
                name: 'MICHAEL BUSCH',
                title: 'mentor',
                email: '',
                image: 'buschProfile.png',
                mentor: 'yes',
                showbio: false,
                bio: 'I am a planetary astronomer specializing in the physical characterization of near-Earth asteroids.  I received his PhD at Caltech in 2010, and worked as a postdoc at UCLA and at the National Radio Astronomy Observatory before joining the SETI Institute as a research scientist in 2013.  Most recently, I have worked on characterizing potential targets for future asteroid space missions.',
                featured: true,
                team: 'new tools'
            },
            {
                name: 'alessondra springmann',
                title: 'planetary science',
                email: 'asteroid@alum.mit.edu',
                image: 'alessondraProfile.png',
                showbio: false,
                featured: false,
                team: 'new tools',
                bio: 'Alessondra Springmann is a planetary astronomer working for the OSIRIS-REx asteroid sample return mission as a graduate researcher at the University of Arizonas Lunar and Planetary Laboratory. \n\n She spent two years at Arecibo Observatory observing near-Earth asteroids with the megawatt planetary radar system on the 305-meter William E. Gordon radio telescope.  Her research interests include asteroids, comets, and meteorites.  Alessondra received her M.Sc. from MIT in Earth & Planetary Sciences and a B.A. from Wellesley College in Astrophysics. \n\n In her spare time she hikes, SCUBA dives, herds cats, writes about science, and races sailboats.'
            },

            {
                name: 'chedy raissi',
                title: 'data science',
                email: 'chedy.raissi@inria.fr',
                image: 'chedyProfile.png',
                showbio: false,
                featured: false,
                team: 'new tools',
                bio: 'I received my PhD in Computer Science from the University of Montpellier and the Ecole des Mines d’alas, France in July 2008.\n\nI worked on topics such as data streams and sequential pattern mining. I also worked at the National University of Singapore as a post-doctoral researcher on privacy-preserving data mining. \n\nI joined the Institut National de Recherche en Informatique et en Automatique (INRIA), France, in fall 2009. I am currently a permanent research scientist (Chargé de recherche 1) within the Orpailleur team working on data mining and machine learning problems.'
            },

            {
                name: 'olorato mosiane',
                title: 'planetary science',
                email: 'omosiane@ska.ac.az',
                image: 'olorato.png',
                showbio: false,
                featured: false,
                team: 'new tools',
                bio: 'My name is Olorato Mosiane, I enjoy skateboarding and coding. I currently work at the Square Kilometer Array South Africa (SKA-SA) as a junior science process developer. I am currently working on machine learning applications in detecting and mitigating radio frequency interference (RFI). During my extra time, I enjoy trading and try to develop some strategies that will try give me a edge on the markets.'
            },

//            {
//                name: 'troy hernandez',
//                title: 'data science',
//                email: 'troy.hernandez.phd@gmail.com',
//                image: 'empty.png',
//                showbio: false,
//                featured: false,
//                team: 'new tools',
//                bio: ''
//            },
    ];

        $scope.newApproaches = [
            {
                name: 'franck marchis',
                title: 'mentor',
                email: '',
                image: 'franckProfile.png',
                mentor: 'yes',
                featured: true,
                showbio: false,
                team: 'new approaches',
                bio: 'Dr. Franck Marchis is a Senior Researcher and Chair of the Exoplanet Group at the Carl Sagan Center of the SETI Institute since July 2007. Over the past 19 years, he has dedicated his research to the study of our solar system, specifically the search for asteroids with moons, using mainly ground-based telescopes equipped with adaptive optics. More recently he has been also involved in the definition of new generation of AOs for 8 -10 m class telescopes and future Extremely Large Telescopes. He has developed algorithms to process and enhance the quality of images, both astronomical and biological. His currently involved in the Gemini Planet Imager Exoplanet Survey, which consists in imaging exoplanets using an extreme AO system for the Gemini South telescope. This new instrument is be capable of imaging and recording spectra of young Jupiter-like exoplanets orbiting around nearby stars.'
      },

            {
                name: 'adam greenberg',
                title: 'planetary science',
                email: 'adam@greenhodge.net',
                image: 'greenbergProfile.png',
                showbio: false,
                feature: false,
                team: 'new approaches',
                bio: 'I am a graduate student studying astrophysics at UCLA. My thesis work is focussing on shape modeling of asteroids from radar data, along with the orbital dynamics of near-earth asteroids and measuring subtle non-secular variations in these orbits. \n\n I like logic and math puzzles, and I enjoy bouldering in my free time.'
            },

            {
                name: 'erika nesvold',
                title: 'planetary science',
                email: 'enesvold@carnegiescience.du',
                image: 'erikaProfile.png',
                showbio: false,
                featured: false,
                team: 'new approaches',
                bio: 'Erika Nesvold received a B.S. in Mathematics, an M.S. in Applied Physics, and a Ph.D. in Physics from the University of Maryland, Baltimore County.\n\n She performed her graduate research at the NASA Goddard Space Flight Center. For her Ph.D. thesis, she developed a computer model of the dynamics and collisions of asteroids in other solar systems. \n\n Currently, she is working as a Postdoctoral Fellow in the Department of Terrestrial Magnetism at the Carnegie Institution of Washington.'
            },

            {
                name: 'elmarie van heerden',
                title: 'data science',
                email: 'elmarie.vanheerden@lmh.ox.ac.uk',
                image: 'elmarieProfile.png',
                showbio: false,
                team: 'new approaches',
                bio: 'My name is Elmarie van Heerden. I am 29 years old and born in Pretoria, South Africa. I am currently a student at the University of Oxford reading for a DPhil. in Engineering with application to astrophysics, more specifically radio astronomy and pulsar searching.\n\n The specific field of research that interest me is the development of novel artificial intelligence and machine learning algorithms to autonomously exploit large data sets. Moreover, I find the crossover between machine learning, big data and astrophysics fascinating because it presents wonderful opportunities to do ground breaking science. \n\n In my spare time I play rugby for the University of Oxford Womens rugby team. I am mad for good coffee and delicious food. I have a yen for travel and my Achilles heel is the Wikipedia-vortex I have going on in my browser, I never manage to open just one Wiki page.'
            },

            {
                name: 'nicolas erasmus',
                title: 'planetary science',
                email: 'nerasmus@saao.ac.za',
                image: 'nicolasProfile.png',
                showbio: false,
                featured: false,
                team: 'new approaches',
                bio: 'I am a physicist originally specialising in femtosecond lasers and applying these lasers in the relatively new field of Ultrafast Electron Diffraction. \n\n I have recently changed research fields and joined an astronomy group that specialises in designing, manufacturing and installing instrumentation (CCD cameras, focal reducers, spectrographs etc.) for medium-sized optical telescopes. \n\n I consider myself a highly motivated, goal orientated, and methodical worker. My fundamental physics background, together with a strong focus on hands-on experimental approaches in a team environment, demonstrates my ability to bring fresh ideas and approaches from a coherent yet pragmatic perspective. '
            },
    ];

        $scope.newDiscoveries = [
            {
                name: 'peter jenniskins',
                title: 'mentor',
                email: '',
                image: 'peterProfile.png',
                showbio: false,
                featured: true,
                mentor: 'yes',
                team: 'new discoveries',
                bio: 'If you ever spend a night under the stars watching for meteors and saw something unusual, you may want to meet astronomer Dr. Peter Jenniskens. He’s an expert on meteor showers and author of Meteor Showers and their Parent Comets, a 790 page book containing predictions on what unusual meteor showers to expect in the next 50 years.'
            },

            {
                name: 'sinha sravanthi',
                title: 'data science',
                email: 'sinha.sravanthi@gmail.com',
                image: 'sinhaProfile.png',
                showbio: false,
                featured: false,
                team: 'new discoveries',
                bio: 'Sravanthi Sinha is a Full Stack Software Engineer. She is really excited about the future of AI research. \n\n Currently one of the 32 students selected all around the world to be part of the first class Holberton School. Was a Student Intern at National Resource for Network Biology (NRNB) in 2012 . Member of NRNB Academy Alumni. Successfully completed Google Summer Of Code (GSOC) 2013 and GSOC 2014 first as a student and then as a mentor. Published WikiPathways: capturing the full diversity of pathway knowledge (2015) in Oxford Journals. \n\nSravanthi earned a Bachelor’s degree in Electronics & Communication Engineering from Jawaharlal Nehru Technological University in Hyderabad, India.'
            },

            {
                name: 'christopher watkins',
                title: 'data science',
                email: 'christopher.watkins@me.com',
                image: 'christopherProfile.png',
                showbio: false,
                featured: false,
                team: 'new discoveries',
                bio: 'Born, raised and still reside on the Mornington Peninsula in Victoria, Australia. I love the area for its surfing, mountain biking, trail running and bushwalking. I have been a student of martial arts for over 15 years, training in a few styles. I have a super cute 1 year old son, and a beautiful partner. I pretty much get stoked on everything. I love learning new things and being challenged, and hate it when things are easy and boring.\n\n Ive spent over 10 years at university completing two first class honours degrees in mechanical engineering and science (applied maths and physics), and my PhD (still writing up) in ultracold computational physics. I currently work at CSIRO in the scientific computing team, working with researchers to enable them with our high performance computing systems and help develop their numerical algorithms. I love the broad range of scientific domains I encounter in my work, and especially love the continual challenge. I really like travelling. I get around as often as I can. I especially love eating in new places and experiencing different cuisine.'
            },

            {
                name: 'robert citron',
                title: 'planetary science',
                email: 'ricitron@gmail.com',
                image: 'citronProfile.png',
                featured: false,
                team: 'new discoveries',
                showbio:false,
                featured: false,
                team:'new discoveries',
                bio:'Robert is a graduate student in Planetary Science at the University of California, Berkeley, where he studies geophysical processes on Mars and other planetary bodies. He received his masters degree in Astrophysical and Planetary Sciences from the University of Colorado, Boulder, and is interested in Solar System research and exploration.'
            },

            {
                name: 'amar shah',
                title: 'data science',
                email: 'as793@cam.ac.uk',
                image: 'amarProfile.png',
                showbio: false,
                featured: false,
                team: 'new discoveries',
                bio: 'I am a Machine Learning PhD student at the University of Cambridge. My research has predominantly been on Bayesian nonparametric modelling and inference, including Gaussian and beta processes. In particular, I have spent most of my time considering model based optimization; this is the task of finding the optimum of a continuous function by judicious, sequential, point-wise evaluation, directed by modelling the unknown function and trading off exploration and exploitation. This is useful for functions which do not return derivatives and are expensive to evaluate, e.g. functions which require slow simulation. More recently, I have also been interested in deep representation learning and optimization. \n\nMy Undergraduate and Masters level studies were in Mathematics and Statistics, also in Cambridge. Prior to starting my PhD, I worked as a Quantitative Strategist in the Investment Banking Division of Goldman Sachs. Outside of scientific research, I enjoy studying Psychology and Eastern Philosophy. \n\nI also seek thrills and pursue sports such as snowboarding, surfing and longboarding. Most of all, I enjoy meeting and getting to know different people, from various parts of the world. I hope my future involves continuous learning, travel, contemplation and adventure. '
            },
    ];



    });
