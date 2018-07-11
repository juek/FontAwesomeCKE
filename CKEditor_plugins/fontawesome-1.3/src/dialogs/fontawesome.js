/*
 *
 * Authors	: Michael Janea (www.michaeljanea.com):
 *              - creator of the original plugin (v1.0 - v1.2)
 *            Juergen Krausz (www.grafikrausz.at):
 *              - updated for FontAwesome 4.7
 *              - modified for Typesetter CMS 5+ native FontAwesome support
 *              - some other small modifications
 *
 * Version	: 1.3
 *
 */

var fontawesome = '';

var icons = [
  ['fa-500px','500px'],
  ['fa-address-book','Address book'],
  ['fa-address-book-o','Address book (inverted)'],
  ['fa-address-card','Address card'],
  ['fa-address-card-o','Address card (inverted)'],
  ['fa-adjust','Adjust'],
  ['fa-adn','Adn'],
  ['fa-align-center','Align center'],
  ['fa-align-justify','Align justify'],
  ['fa-align-left','Align left'],
  ['fa-align-right','Align right'],
  ['fa-amazon','Amazon'],
  ['fa-ambulance','Ambulance'],
  ['fa-american-sign-language-interpreting','American sign language interpreting'],
  ['fa-anchor','Anchor'],
  ['fa-android','Android'],
  ['fa-angellist','Angellist'],
  ['fa-angle-double-down','Angle double down'],
  ['fa-angle-double-left','Angle double left'],
  ['fa-angle-double-right','Angle double right'],
  ['fa-angle-double-up','Angle double up'],
  ['fa-angle-down','Angle down'],
  ['fa-angle-left','Angle left'],
  ['fa-angle-right','Angle right'],
  ['fa-angle-up','Angle up'],
  ['fa-apple','Apple'],
  ['fa-archive','Archive'],
  ['fa-area-chart','Area chart'],
  ['fa-arrow-circle-down','Arrow circle down'],
  ['fa-arrow-circle-left','Arrow circle left'],
  ['fa-arrow-circle-o-down','Arrow circle down (inverted)'],
  ['fa-arrow-circle-o-left','Arrow circle left (inverted)'],
  ['fa-arrow-circle-o-right','Arrow circle right (inverted)'],
  ['fa-arrow-circle-o-up','Arrow circle up (inverted)'],
  ['fa-arrow-circle-right','Arrow circle right'],
  ['fa-arrow-circle-up','Arrow circle up'],
  ['fa-arrow-down','Arrow down'],
  ['fa-arrow-left','Arrow left'],
  ['fa-arrow-right','Arrow right'],
  ['fa-arrow-up','Arrow up'],
  ['fa-arrows','Arrows'],
  ['fa-arrows-alt','Arrows alt'],
  ['fa-arrows-h','Arrows h'],
  ['fa-arrows-v','Arrows v'],
  ['fa-assistive-listening-systems','Assistive listening systems'],
  ['fa-asterisk','Asterisk'],
  ['fa-at','At'],
  ['fa-audio-description','Audio description'],
  ['fa-backward','Backward'],
  ['fa-balance-scale','Balance scale'],
  ['fa-ban','Ban'],
  ['fa-bandcamp','Bandcamp'],
  ['fa-bar-chart','Bar chart'],
  ['fa-barcode','Barcode'],
  ['fa-bars','Bars'],
  ['fa-bath','Bath'],
  ['fa-battery-empty','Battery empty'],
  ['fa-battery-quarter','Battery quarter'],
  ['fa-battery-half','Battery half'],
  ['fa-battery-three-quarters','Battery three quarters'],
  ['fa-battery-full','Battery full'],
  ['fa-bed','Bed'],
  ['fa-beer','Beer'],
  ['fa-behance','Behance'],
  ['fa-behance-square','Behance square'],
  ['fa-bell','Bell'],
  ['fa-bell-o','Bell (inverted)'],
  ['fa-bell-slash','Bell slash'],
  ['fa-bell-slash-o','Bell slash (inverted)'],
  ['fa-bicycle','Bicycle'],
  ['fa-binoculars','Binoculars'],
  ['fa-birthday-cake','Birthday cake'],
  ['fa-bitbucket','Bitbucket'],
  ['fa-bitbucket-square','Bitbucket square'],
  ['fa-black-tie','Black tie'],
  ['fa-blind','Blind'],
  ['fa-bluetooth','Bluetooth'],
  ['fa-bluetooth-b','Bluetooth B'],
  ['fa-bold','Bold'],
  ['fa-bolt','Bolt'],
  ['fa-bomb','Bomb'],
  ['fa-book','Book'],
  ['fa-bookmark','Bookmark'],
  ['fa-bookmark-o','Bookmark (inverted)'],
  ['fa-braille','Braille'],
  ['fa-briefcase','Briefcase'],
  ['fa-btc','Btc'],
  ['fa-bug','Bug'],
  ['fa-building','Building'],
  ['fa-building-o','Building (inverted)'],
  ['fa-bullhorn','Bullhorn'],
  ['fa-bullseye','Bullseye'],
  ['fa-bus','Bus'],
  ['fa-buysellads','Buysellads'],
  ['fa-calculator','Calculator'],
  ['fa-calendar','Calendar'],
  ['fa-calendar-check-o','Calendar check (inverted)'],
  ['fa-calendar-minus-o','Calendar minus (inverted)'],
  ['fa-calendar-o','Calendar (inverted)'],
  ['fa-calendar-plus-o','Calendar plus (inverted)'],
  ['fa-calendar-times-o','Calendar times (inverted)'],
  ['fa-camera','Camera'],
  ['fa-camera-retro','Camera retro'],
  ['fa-car','Car'],
  ['fa-caret-down','Caret down'],
  ['fa-caret-left','Caret left'],
  ['fa-caret-right','Caret right'],
  ['fa-caret-up','Caret up'],
  ['fa-caret-square-o-down','Caret square (inverted) down'],
  ['fa-caret-square-o-left','Caret square (inverted) left'],
  ['fa-caret-square-o-right','Caret square (inverted) right'],
  ['fa-caret-square-o-up','Caret square (inverted) up'],
  ['fa-cart-arrow-down','Cart arrow down'],
  ['fa-cart-plus','Cart plus'],
  ['fa-cc','Cc'],
  ['fa-cc-amex','Cc amex'],
  ['fa-cc-diners-club','Cc diners club'],
  ['fa-cc-discover','Cc discover'],
  ['fa-cc-jcb','Cc jcb'],
  ['fa-cc-mastercard','Cc mastercard'],
  ['fa-cc-paypal','Cc paypal'],
  ['fa-cc-stripe','Cc stripe'],
  ['fa-cc-visa','Cc visa'],
  ['fa-certificate','Certificate'],
  ['fa-chain-broken','Chain broken'],
  ['fa-check','Check'],
  ['fa-check-circle','Check circle'],
  ['fa-check-circle-o','Check circle (inverted)'],
  ['fa-check-square','Check square'],
  ['fa-check-square-o','Check square (inverted)'],
  ['fa-chevron-circle-down','Chevron circle down'],
  ['fa-chevron-circle-left','Chevron circle left'],
  ['fa-chevron-circle-right','Chevron circle right'],
  ['fa-chevron-circle-up','Chevron circle up'],
  ['fa-chevron-down','Chevron down'],
  ['fa-chevron-left','Chevron left'],
  ['fa-chevron-right','Chevron right'],
  ['fa-chevron-up','Chevron up'],
  ['fa-child','Child'],
  ['fa-chrome','Chrome'],
  ['fa-circle','Circle'],
  ['fa-circle-o','Circle (inverted)'],
  ['fa-circle-o-notch','Circle (inverted) notch'],
  ['fa-circle-thin','Circle thin'],
  ['fa-clipboard','Clipboard'],
  ['fa-clock-o','Clock (inverted)'],
  ['fa-clone','Clone'],
  ['fa-cloud','Cloud'],
  ['fa-cloud-download','Cloud download'],
  ['fa-cloud-upload','Cloud upload'],
  ['fa-code','Code'],
  ['fa-code-fork','Code fork'],
  ['fa-codepen','Codepen'],
  ['fa-codiepie','Codiepie'],
  ['fa-coffee','Coffee'],
  ['fa-cog','Cog'],
  ['fa-cogs','Cogs'],
  ['fa-columns','Columns'],
  ['fa-comment','Comment'],
  ['fa-comment-o','Comment (inverted)'],
  ['fa-commenting','Commenting'],
  ['fa-commenting-o','Commenting (inverted)'],
  ['fa-comments','Comments'],
  ['fa-comments-o','Comments (inverted)'],
  ['fa-compass','Compass'],
  ['fa-compress','Compress'],
  ['fa-connectdevelop','Connectdevelop'],
  ['fa-contao','Contao'],
  ['fa-copyright','Copyright'],
  ['fa-creative-commons','Creative commons'],
  ['fa-credit-card','Credit card'],
  ['fa-credit-card-alt','Credit card alternate'],
  ['fa-crop','Crop'],
  ['fa-crosshairs','Crosshairs'],
  ['fa-css3','Css3'],
  ['fa-cube','Cube'],
  ['fa-cubes','Cubes'],
  ['fa-cutlery','Cutlery'],
  ['fa-dashcube','Dashcube'],
  ['fa-database','Database'],
  ['fa-deaf','Deaf'],
  ['fa-delicious','Delicious'],
  ['fa-desktop','Desktop'],
  ['fa-deviantart','Deviantart'],
  ['fa-diamond','Diamond'],
  ['fa-digg','Digg'],
  ['fa-dot-circle-o','Dot circle (inverted)'],
  ['fa-download','Download'],
  ['fa-dribbble','Dribbble'],
  ['fa-drivers-license','Driver license'],
  ['fa-drivers-license-o','Driver license (inverted)'],
  ['fa-dropbox','Dropbox'],
  ['fa-drupal','Drupal'],
  ['fa-edge','Edge'],
  ['fa-eject','Eject'],
  ['fa-eercast','Eercast'],
  ['fa-ellipsis-h','Ellipsis h'],
  ['fa-ellipsis-v','Ellipsis v'],
  ['fa-empire','Empire'],
  ['fa-envelope','Envelope'],
  ['fa-envelope-o','Envelope (inverted)'],
  ['fa-envelope-open','Envelope open'],
  ['fa-envelope-open-o','Envelope open (inverted)'],
  ['fa-envelope-square','Envelope square'],
  ['fa-envira','Envira'],
  ['fa-eraser','Eraser'],
  ['fa-etsy','Etsy'],
  ['fa-eur','Eur'],
  ['fa-exchange','Exchange'],
  ['fa-exclamation','Exclamation'],
  ['fa-exclamation-circle','Exclamation circle'],
  ['fa-exclamation-triangle','Exclamation triangle'],
  ['fa-expand','Expand'],
  ['fa-expeditedssl','Expeditedssl'],
  ['fa-external-link','External link'],
  ['fa-external-link-square','External link square'],
  ['fa-eye','Eye'],
  ['fa-eye-slash','Eye slash'],
  ['fa-eyedropper','Eyedropper'],
  ['fa-facebook','facebook'],
  ['fa-facebook-official','facebook official'],
  ['fa-facebook-square','facebook square'],
  ['fa-fast-backward','fast backward'],
  ['fa-fast-forward','fast forward'],
  ['fa-fax','fax'],
  ['fa-female','Female'],
  ['fa-fighter-jet','Fighter jet'],
  ['fa-file','File'],
  ['fa-file-archive-o','File archive (inverted)'],
  ['fa-file-audio-o','File audio (inverted)'],
  ['fa-file-code-o','File code (inverted)'],
  ['fa-file-excel-o','File excel (inverted)'],
  ['fa-file-image-o','File image (inverted)'],
  ['fa-file-o','File (inverted)'],
  ['fa-file-pdf-o','File pdf (inverted)'],
  ['fa-file-powerpoint-o','File powerpoint (inverted)'],
  ['fa-file-text','File text'],
  ['fa-file-text-o','File text (inverted)'],
  ['fa-file-video-o','File video (inverted)'],
  ['fa-file-word-o','File word (inverted)'],
  ['fa-files-o','Files (inverted)'],
  ['fa-film','Film'],
  ['fa-filter','Filter'],
  ['fa-fire','Fire'],
  ['fa-fire-extinguisher','Fire extinguisher'],
  ['fa-firefox','Firefox'],
  ['fa-first-order','First order'],
  ['fa-flag','Flag'],
  ['fa-flag-checkered','Flag checkered'],
  ['fa-flag-o','Flag (inverted)'],
  ['fa-flask','Flask'],
  ['fa-flickr','Flickr'],
  ['fa-floppy-o','Floppy (inverted)'],
  ['fa-folder','Folder'],
  ['fa-folder-o','Folder (inverted)'],
  ['fa-folder-(inverted)','Folder (inverted)'],
  ['fa-folder-open-o','Folder open (inverted)'],
  ['fa-font','Font'],
  ['fa-font-awesome','Font Awesome'],
  ['fa-fonticons','Fonticons'],
  ['fa-fort-awesome','Fort Awesome'],
  ['fa-forumbee','Forumbee'],
  ['fa-forward','Forward'],
  ['fa-foursquare','Foursquare'],
  ['fa-free-code-camp','Free code camp'],
  ['fa-frown-o','Frown (inverted)'],
  ['fa-futbol-o','Futbol (inverted)'],
  ['fa-gamepad','Gamepad'],
  ['fa-gavel','Gavel'],
  ['fa-gbp','Gbp'],
  ['fa-genderless','Genderless'],
  ['fa-get-pocket','Get pocket'],
  ['fa-gg','Gg'],
  ['fa-gg-circle','Gg circle'],
  ['fa-gift','Gift'],
  ['fa-git','Git'],
  ['fa-git-square','Git square'],
  ['fa-github','Github'],
  ['fa-github-alt','Github alt'],
  ['fa-github-square','Github square'],
  ['fa-gitlab','GitLab'],
  ['fa-glass','Glass'],
  ['fa-glide','Glide'],
  ['fa-glide-g','Glide g'],
  ['fa-globe','Globe'],
  ['fa-google','Google'],
  ['fa-google-plus','Google plus'],
  ['fa-google-plus-official','Google+ official'],
  ['fa-google-plus-square','Google plus square'],
  ['fa-google-wallet','Google wallet'],
  ['fa-graduation-cap','Graduation cap'],
  ['fa-gratipay','Gratipay'],
  ['fa-grav','Grav'],
  ['fa-h-square','H square'],
  ['fa-hacker-news','Hacker news'],
  ['fa-hand-lizard-o','Hand lizard (inverted)'],
  ['fa-hand-o-down','Hand open down'],
  ['fa-hand-o-left','Hand open left'],
  ['fa-hand-o-right','Hand open right'],
  ['fa-hand-o-up','Hand open up'],
  ['fa-hand-paper-o','Hand paper (inverted)'],
  ['fa-hand-peace-o','Hand peace (inverted)'],
  ['fa-hand-pointer-o','Hand pointer (inverted)'],
  ['fa-hand-rock-o','Hand rock (inverted)'],
  ['fa-hand-scissors-o','Hand scissors (inverted)'],
  ['fa-hand-spock-o','Hand spock (inverted)'],
  ['fa-handshake-o','Handshake (inverted)'],
  ['fa-hashtag','Hashtag'],
  ['fa-hdd-o','Hdd (inverted)'],
  ['fa-header','Header'],
  ['fa-headphones','Headphones'],
  ['fa-heart','Heart'],
  ['fa-heart-o','Heart (inverted)'],
  ['fa-heartbeat','Heartbeat'],
  ['fa-history','History'],
  ['fa-home','Home'],
  ['fa-hospital-o','Hospital (inverted)'],
  ['fa-hourglass','Hourglass'],
  ['fa-hourglass-end','Hourglass end'],
  ['fa-hourglass-half','Hourglass half'],
  ['fa-hourglass-o','Hourglass (inverted)'],
  ['fa-hourglass-start','Hourglass start'],
  ['fa-houzz','Houzz'],
  ['fa-html5','Html5'],
  ['fa-i-cursor','I cursor'],
  ['fa-id-badge','Id badge'],
  ['fa-id-card','Id card'],
  ['fa-id-card-o','Id card (inverted)'],
  ['fa-ils','Ils'],
  ['fa-imdb','IMDB'],
  ['fa-inbox','Inbox'],
  ['fa-indent','Indent'],
  ['fa-industry','Industry'],
  ['fa-info','Info'],
  ['fa-info-circle','Info circle'],
  ['fa-inr','Inr'],
  ['fa-instagram','Instagram'],
  ['fa-internet-explorer','Internet explorer'],
  ['fa-ioxhost','Ioxhost'],
  ['fa-italic','Italic'],
  ['fa-joomla','Joomla'],
  ['fa-jpy','Jpy'],
  ['fa-jsfiddle','Jsfiddle'],
  ['fa-key','Key'],
  ['fa-keyboard-o','Keyboard (inverted)'],
  ['fa-krw','Krw'],
  ['fa-language','Language'],
  ['fa-laptop','Laptop'],
  ['fa-lastfm','Lastfm'],
  ['fa-lastfm-square','Lastfm square'],
  ['fa-leaf','Leaf'],
  ['fa-leanpub','Leanpub'],
  ['fa-lemon-o','Lemon (inverted)'],
  ['fa-level-down','Level down'],
  ['fa-level-up','Level up'],
  ['fa-life-ring','Life ring'],
  ['fa-lightbulb-o','Lightbulb (inverted)'],
  ['fa-line-chart','Line chart'],
  ['fa-link','Link'],
  ['fa-linkedin','Linkedin'],
  ['fa-linkedin-square','Linkedin square'],
  ['fa-linode','Linode'],
  ['fa-linux','Linux'],
  ['fa-list','List'],
  ['fa-list-alt','List alt'],
  ['fa-list-ol','List ol'],
  ['fa-list-ul','List ul'],
  ['fa-location-arrow','Location arrow'],
  ['fa-lock','Lock'],
  ['fa-long-arrow-down','Long arrow down'],
  ['fa-long-arrow-left','Long arrow left'],
  ['fa-long-arrow-right','Long arrow right'],
  ['fa-long-arrow-up','Long arrow up'],
  ['fa-low-vision','Low vision'],
  ['fa-magic','Magic'],
  ['fa-magnet','Magnet'],
  ['fa-male','Male'],
  ['fa-map','Map'],
  ['fa-map-marker','Map marker'],
  ['fa-map-o','Map (inverted)'],
  ['fa-map-pin','Map pin'],
  ['fa-map-signs','Map signs'],
  ['fa-mars','Mars'],
  ['fa-mars-double','Mars double'],
  ['fa-mars-stroke','Mars stroke'],
  ['fa-mars-stroke-h','Mars stroke h'],
  ['fa-mars-stroke-v','Mars stroke v'],
  ['fa-maxcdn','Maxcdn'],
  ['fa-meanpath','Meanpath'],
  ['fa-medium','Medium'],
  ['fa-medkit','Medkit'],
  ['fa-meetup','Meetup'],
  ['fa-meh-o','Meh (inverted)'],
  ['fa-mercury','Mercury'],
  ['fa-microchip','Microchip'],
  ['fa-microphone','Microphone'],
  ['fa-microphone-slash','Microphone slash'],
  ['fa-minus','Minus'],
  ['fa-minus-circle','Minus circle'],
  ['fa-minus-square','Minus square'],
  ['fa-minus-square-o','Minus square (inverted)'],
  ['fa-mixcloud','Mixcloud'],
  ['fa-mobile','Mobile'],
  ['fa-modx','ModX'],
  ['fa-money','Money'],
  ['fa-moon-o','Moon (inverted)'],
  ['fa-motorcycle','Motorcycle'],
  ['fa-mouse-pointer','Mouse pointer'],
  ['fa-music','Music'],
  ['fa-neuter','Neuter'],
  ['fa-newspaper-o','Newspaper (inverted)'],
  ['fa-object-group','Object group'],
  ['fa-object-ungroup','Object ungroup'],
  ['fa-odnoklassniki','Odnoklassniki'],
  ['fa-odnoklassniki-square','Odnoklassniki square'],
  ['fa-opencart','Opencart'],
  ['fa-openid','Openid'],
  ['fa-opera','Opera'],
  ['fa-optin-monster','Optin monster'],
  ['fa-outdent','Outdent'],
  ['fa-pagelines','Pagelines'],
  ['fa-paint-brush','Paint brush'],
  ['fa-paper-plane','Paper plane'],
  ['fa-paper-plane-o','Paper plane (inverted)'],
  ['fa-paperclip','Paperclip'],
  ['fa-paragraph','Paragraph'],
  ['fa-pause','Pause'],
  ['fa-pause-circle','Pause circle'],
  ['fa-pause-circle-o','Pause circle (inverted)'],
  ['fa-paw','Paw'],
  ['fa-paypal','Paypal'],
  ['fa-pencil','Pencil'],
  ['fa-pencil-square','Pencil square'],
  ['fa-pencil-square-o','Pencil square (inverted)'],
  ['fa-percent','Per cent'],
  ['fa-phone','Phone'],
  ['fa-phone-square','Phone square'],
  ['fa-picture-o','Picture (inverted)'],
  ['fa-pie-chart','Pie chart'],
  ['fa-pied-piper','Pied piper'],
  ['fa-pied-piper-alt','Pied piper alt'],
  ['fa-pinterest','Pinterest'],
  ['fa-pinterest-p','Pinterest p'],
  ['fa-pinterest-square','Pinterest square'],
  ['fa-plane','Plane'],
  ['fa-play','Play'],
  ['fa-play-circle','Play circle'],
  ['fa-play-circle-o','Play circle (inverted)'],
  ['fa-plug','Plug'],
  ['fa-plus','Plus'],
  ['fa-plus-circle','Plus circle'],
  ['fa-plus-square','Plus square'],
  ['fa-plus-square-o','Plus square (inverted)'],
  ['fa-podcast','Podcast'],
  ['fa-power-off','Power off'],
  ['fa-print','Print'],
  ['fa-puzzle-piece','Puzzle piece'],
  ['fa-qq','Qq'],
  ['fa-qrcode','Qrcode'],
  ['fa-question','Question'],
  ['fa-question-circle','Question circle'],
  ['fa-question-circle-o','Question circle (inverted)'],
  ['fa-quora','Quora'],
  ['fa-quote-left','Quote left'],
  ['fa-quote-right','Quote right'],
  ['fa-random','Random'],
  ['fa-ravelry','Ravelry'],
  ['fa-rebel','Rebel'],
  ['fa-recycle','Recycle'],
  ['fa-reddit','Reddit'],
  ['fa-reddit-alien','Reddit alien'],
  ['fa-reddit-square','Reddit square'],
  ['fa-refresh','Refresh'],
  ['fa-registered','Registered'],
  ['fa-renren','Renren'],
  ['fa-repeat','Repeat'],
  ['fa-reply','Reply'],
  ['fa-reply-all','Reply all'],
  ['fa-retweet','Retweet'],
  ['fa-road','Road'],
  ['fa-rocket','Rocket'],
  ['fa-rss','Rss'],
  ['fa-rss-square','Rss square'],
  ['fa-rub','Rub'],
  ['fa-safari','Safari'],
  ['fa-scissors','Scissors'],
  ['fa-scribd','Scripd'],
  ['fa-search','Search'],
  ['fa-search-minus','Search minus'],
  ['fa-search-plus','Search plus'],
  ['fa-sellsy','Sellsy'],
  ['fa-server','Server'],
  ['fa-share','Share'],
  ['fa-share-alt','Share alt'],
  ['fa-share-alt-square','Share alt square'],
  ['fa-share-square','Share square'],
  ['fa-share-square-o','Share square (inverted)'],
  ['fa-shield','Shield'],
  ['fa-ship','Ship'],
  ['fa-shirtsinbulk','Shirtsinbulk'],
  ['fa-shopping-bag','Shopping bag'],
  ['fa-shopping-basket','Shopping basket'],
  ['fa-shopping-cart','Shopping cart'],
  ['fa-shower','Shower'],
  ['fa-sign-in','Sign in'],
  ['fa-sign-language','Sign language'],
  ['fa-sign-out','Sign out'],
  ['fa-signal','Signal'],
  ['fa-simplybuilt','Simplybuilt'],
  ['fa-sitemap','Sitemap'],
  ['fa-skyatlas','Skyatlas'],
  ['fa-skype','Skype'],
  ['fa-slack','Slack'],
  ['fa-sliders','Sliders'],
  ['fa-slideshare','Slideshare'],
  ['fa-smile-o','Smile (inverted)'],
  ['fa-snapchat','Snapchat'],
  ['fa-snapchat-ghost','Snapchat ghost'],
  ['fa-snapchat-square','Snapchat square'],
  ['fa-snowflake-o','Snowflake'],
  ['fa-sort','Sort'],
  ['fa-sort-alpha-asc','Sort alpha asc'],
  ['fa-sort-alpha-desc','Sort alpha desc'],
  ['fa-sort-amount-asc','Sort amount asc'],
  ['fa-sort-amount-desc','Sort amount desc'],
  ['fa-sort-asc','Sort asc'],
  ['fa-sort-desc','Sort desc'],
  ['fa-sort-numeric-asc','Sort numeric asc'],
  ['fa-sort-numeric-desc','Sort numeric desc'],
  ['fa-soundcloud','Soundcloud'],
  ['fa-space-shuttle','Space shuttle'],
  ['fa-spinner','Spinner'],
  ['fa-spoon','Spoon'],
  ['fa-spotify','Spotify'],
  ['fa-square','Square'],
  ['fa-square-o','Square (inverted)'],
  ['fa-stack-exchange','Stack exchange'],
  ['fa-stack-overflow','Stack overflow'],
  ['fa-star','Star'],
  ['fa-star-half','Star half'],
  ['fa-star-half-o','Star half (inverted)'],
  ['fa-star-o','Star (inverted)'],
  ['fa-steam','Steam'],
  ['fa-steam-square','Steam square'],
  ['fa-step-backward','Step backward'],
  ['fa-step-forward','Step forward'],
  ['fa-stethoscope','Stethoscope'],
  ['fa-sticky-note','Sticky note'],
  ['fa-sticky-note-o','Sticky note (inverted)'],
  ['fa-stop','Stop'],
  ['fa-stop-circle','Stop circle'],
  ['fa-stop-circle-o','Stop circle (inverted)'],
  ['fa-street-view','Street view'],
  ['fa-strikethrough','Strikethrough'],
  ['fa-stumbleupon','Stumbleupon'],
  ['fa-stumbleupon-circle','Stumbleupon circle'],
  ['fa-subscript','Subscript'],
  ['fa-subway','Subway'],
  ['fa-suitcase','Suitcase'],
  ['fa-sun-o','Sun (inverted)'],
  ['fa-superpowers','Superpowers'],
  ['fa-superscript','Superscript'],
  ['fa-table','Table'],
  ['fa-tablet','Tablet'],
  ['fa-tachometer','Tachometer'],
  ['fa-tag','Tag'],
  ['fa-tags','Tags'],
  ['fa-tasks','Tasks'],
  ['fa-taxi','Taxi'],
  ['fa-telegram','Telegram'],
  ['fa-television','Television'],
  ['fa-tencent-weibo','Tencent weibo'],
  ['fa-terminal','Terminal'],
  ['fa-text-height','Text height'],
  ['fa-text-width','Text width'],
  ['fa-th','Th'],
  ['fa-th-large','Th large'],
  ['fa-th-list','Th list'],
  ['fa-themeisle','Themeisle'],
  ['fa-thermometer-empty','Thermometer empty'],
  ['fa-thermometer-quarter','Thermometer quarter'],
  ['fa-thermometer-half','Thermometer half'],
  ['fa-thermometer-three-quarters','Thermometer three quarters'],
  ['fa-thermometer-full','Thermometer full'],
  ['fa-thumb-tack','Thumb tack'],
  ['fa-thumbs-down','Thumbs down'],
  ['fa-thumbs-o-down','Thumbs down (inverted)'],
  ['fa-thumbs-o-up','Thumbs up (inverted)'],
  ['fa-thumbs-up','Thumbs up'],
  ['fa-ticket','Ticket'],
  ['fa-times','Times'],
  ['fa-times-circle','Times circle'],
  ['fa-times-circle-o','Times circle (inverted)'],
  ['fa-times-rectangle','Times rectangle'],
  ['fa-times-rectangle-o','Times rectangle (inverted)'],
  ['fa-tint','Tint'],
  ['fa-toggle-off','Toggle off'],
  ['fa-toggle-on','Toggle on'],
  ['fa-trademark','Trademark'],
  ['fa-train','Train'],
  ['fa-transgender','Transgender'],
  ['fa-transgender-alt','Transgender alt'],
  ['fa-trash','Trash'],
  ['fa-trash-o','Trash (inverted)'],
  ['fa-tree','Tree'],
  ['fa-trello','Trello'],
  ['fa-tripadvisor','Tripadvisor'],
  ['fa-trophy','Trophy'],
  ['fa-truck','Truck'],
  ['fa-try','Try'],
  ['fa-tty','Tty'],
  ['fa-tumblr','Tumblr'],
  ['fa-tumblr-square','Tumblr square'],
  ['fa-twitch','Twitch'],
  ['fa-twitter','Twitter'],
  ['fa-twitter-square','Twitter square'],
  ['fa-umbrella','Umbrella'],
  ['fa-underline','Underline'],
  ['fa-undo','Undo'],
  ['fa-universal-access','Universal access'],
  ['fa-university','University'],
  ['fa-unlock','Unlock'],
  ['fa-unlock-alt','Unlock alt'],
  ['fa-upload','Upload'],
  ['fa-usd','Usd'],
  ['fa-user','User'],
  ['fa-user-circle','User circle'],
  ['fa-user-circle-o','User circle (inverted)'],
  ['fa-user-md','User md'],
  ['fa-user-plus','User plus'],
  ['fa-user-secret','User secret'],
  ['fa-user-times','User times'],
  ['fa-users','Users'],
  ['fa-venus','Venus'],
  ['fa-venus-double','Venus double'],
  ['fa-venus-mars','Venus mars'],
  ['fa-viacoin','Via Coin'],
  ['fa-viadeo','Viadeo'],
  ['fa-viadeo-square','Viadeo square'],
  ['fa-video-camera','Video camera'],
  ['fa-vimeo','Vimeo'],
  ['fa-vimeo-square','Vimeo square'],
  ['fa-vine','Vine'],
  ['fa-vk','Vk'],
  ['fa-volume-control-phone','Volume control phone'],
  ['fa-volume-down','Volume down'],
  ['fa-volume-off','Volume off'],
  ['fa-volume-up','Volume up'],
  ['fa-weibo','Weibo'],
  ['fa-weixin','Weixin'],
  ['fa-whatsapp','Whatsapp'],
  ['fa-wheelchair','Wheelchair'],
  ['fa-wheelchair-alt','Wheelchair alternate'],
  ['fa-wifi','Wifi'],
  ['fa-wikipedia-w','Wikipedia w'],
  ['fa-window-close','Window close'],
  ['fa-window-close-o','Window close (inverted)'],
  ['fa-window-maximize','Window maximize'],
  ['fa-window-minimize','Window minimize'],
  ['fa-window-restore','Window restore'],
  ['fa-windows','Windows'],
  ['fa-wordpress','Wordpress'],
  ['fa-wpbeginner','WPBeginner'],
  ['fa-wpexplorer','WPExplorer'],
  ['fa-wrench','Wrench'],
  ['fa-xing','Xing'],
  ['fa-xing-square','Xing square'],
  ['fa-y-combinator','Y combinator'],
  ['fa-yahoo','Yahoo'],
  ['fa-yelp','Yelp'],
  ['fa-yoast','Yoast'],
  ['fa-youtube','Youtube'],
  ['fa-youtube-play','Youtube play'],
  ['fa-youtube-square','Youtube square'] 
];

// icons.sort();
var fontawesomeIcons = '';
for (var i = 0; i < icons.length; i++) {
  var newTitle = '';
  var ctr = 0;
  var title = icons[i][1];
  title = title.split(' ');
  for (var x = 0; x < title.length; x++) {
    ctr++;
    newTitle += ctr == 3 ? '<br />' : '';
    newTitle += title[x] + ' ';
    ctr = ctr == 3 ? 0 : ctr;
  }
  fontawesomeIcons += '<a href="#" '
    + 'onclick="klik(this);return false;" title="fa ' 
    + icons[i][0] + '"><span class="fa ' 
    + icons[i][0] + '"></span><div>' 
    + newTitle + '</div></a>';
};

function klik(el) {
  document.getElementsByClassName('fontawesomeClass')[0]
    .getElementsByTagName('input')[0]
      .value = el.getAttribute('title');
  a = document.getElementById('fontawesome');
  a = a.getElementsByTagName('a');
  for (i = 0; i < a.length; i++) {
    a[i].className = '';
  }
  el.className += 'active';
};

function searchIcon(val) {
  var aydi = document.getElementById('fontawesome');
  var klases = aydi.getElementsByTagName('a');
  for (var i = 0, len = klases.length, klas, klasNeym; i < len; i++) {
    klas = klases[i];
    klasNeym = klas.getAttribute('title');
    if (klasNeym && klasNeym.indexOf(val) >= 0) {
      klas.style.display = 'block';
    } else {
      klas.style.display = 'none';
    }
  }
};

function setSpanColor(color) {
  el = document.getElementById('fontawesome');
  el = el.getElementsByTagName('span');
  for (i = 0; i < el.length; i++) {
    el[i].setAttribute('style', 'color:' + color)
  }
};

function setCheckboxes() {
  klases = '';
  klases += document.getElementsByClassName('spinning')[0]
    .getElementsByTagName('input')[0].checked 
    ? ' fa-spin' : klases;

  klases += document.getElementsByClassName('fixedWidth')[0]
    .getElementsByTagName('input')[0].checked 
    ? ' fa-fw' : klases;

  klases += document.getElementsByClassName('bordered')[0]
    .getElementsByTagName('input')[0].checked 
    ? ' fa-border' : klases;

  klases += ' ' + document.getElementsByClassName('flippedRotation')[0]
    .getElementsByTagName('select')[0].value;

  el = document.getElementById('fontawesome');
  el = el.getElementsByTagName('span');
  for (i = 0; i < el.length; i++) {
    el[i].className = el[i].parentNode.getAttribute('title') + klases;
  }
};

function in_array(needle, haystack) {
  for (var i in haystack) {
    if (haystack[i] == needle) return true;
  }
  return false;
};
CKEDITOR.dialog.add('fontawesomeDialog', function(editor) {
  return {
    title: 'Insert Font Awesome',
    minWidth: 600,
    minHeight: 400,
    resizable: false,
    contents: [{
      id: 'insertFontawesome',
      label: 'insertFontawesome',
      elements: [{
        type: 'hbox',
        widths: ['50%', '50%'],
        children: [{
          type: 'hbox',
          widths: ['75%', '25%'],
          children: [{
            type: 'text',
            id: 'colorChooser',
            className: 'colorChooser',
            label: 'Color',
            onKeyUp: function(e) {
              setSpanColor(e.sender.$.value);
            },
            setup: function(widget) {
              /* we don't want a default color but inherit it unless explicitly set */
              // color = widget.data.color != '' ? widget.data.color : '#000000';
              color = widget.data.color;
              this.setValue(color);
              setSpanColor(color);
            },
            commit: function(widget) {
              widget.setData('color', this.getValue());
            }
          }, {
            type: 'button',
            label: 'Select',
            style: 'margin-top:1.35em',
            onClick: function() {
              editor.getColorFromDialog(function(color) {
                document.getElementsByClassName('colorChooser')[0]
                  .getElementsByTagName('input')[0].value = color;
                setSpanColor(color);
              }, this);
            }
          }]
        }, {
          type: 'text',
          id: 'size',
          className: 'size',
          label: 'Size',
          setup: function(widget) {
            this.setValue(widget.data.size);
          },
          commit: function(widget) {
            widget.setData('size', this.getValue());
          }
        }]
      }, {
        type: 'hbox',
        widths: ['25%', '25%', '25%', '25%'],
        children: [{
          type: 'checkbox',
          id: 'spinning',
          className: 'spinning cke_dialog_ui_checkbox_input',
          label: 'Spinning',
          value: 'true',
          setup: function(widget) {
            var klases = widget.data.class;
            klases = klases.split(' ');
            document.getElementsByClassName('spinning')[0]
              .getElementsByTagName('input')[0].checked = in_array('fa-spin', klases) 
              ? true : false;
            setCheckboxes();
          },
          onClick: function() {
            setCheckboxes();
          }
        }, {
          type: 'checkbox',
          id: 'fixedWidth',
          className: 'fixedWidth cke_dialog_ui_checkbox_input',
          label: 'Fixed Width',
          value: 'true',
          setup: function(widget) {
            var klases = widget.data.class;
            klases = klases.split(' ');
            document.getElementsByClassName('fixedWidth')[0]
              .getElementsByTagName('input')[0].checked = in_array('fa-fw', klases) 
              ? true : false;
            setCheckboxes();
          },
          onClick: function() {
            setCheckboxes();
          }
        }, {
          type: 'checkbox',
          id: 'bordered',
          className: 'bordered cke_dialog_ui_checkbox_input',
          label: 'Bordered',
          value: 'true',
          setup: function(widget) {
            var klases = widget.data.class;
            klases = klases.split(' ');
            document.getElementsByClassName('bordered')[0]
              .getElementsByTagName('input')[0].checked = in_array('fa-border', klases) 
              ? true : false;
            setCheckboxes();
          },
          onClick: function() {
            setCheckboxes();
          }
        }, {
          type: 'select',
          id: 'flippedRotation',
          className: 'flippedRotation cke_dialog_ui_checkbox_input',
          label: 'Flipping and Rotating',
          items: [
            ['Normal', ''],
            ['Rotate 90', 'fa-rotate-90'],
            ['Rotate 180', 'fa-rotate-180'],
            ['Rotate 270', 'fa-rotate-270'],
            ['Flip Horizontal', 'fa-flip-horizontal'],
            ['Flip Vertical', 'fa-flip-vertical']
          ],
          setup: function(widget) {
            this.setValue(widget.data.flippedRotation ? widget.data.flippedRotation : '');
          },
          commit: function(widget) {
            widget.setData('flippedRotation', this.getValue());
          },
          onClick: function() {
            setCheckboxes();
          }
        }]
      }, {
        type: 'text',
        id: 'fontawesomeSearch',
        className: 'fontawesomeSearch cke_dialog_ui_input_text',
        label: 'Search',
        onKeyUp: function(e) {
          searchIcon(e.sender.$.value);
        }
      }, {
        type: 'text',
        id: 'fontawesomeClass',
        className: 'fontawesomeClass',
        style: 'display:none',
        setup: function(widget) {
          var klases = '';
          if (widget.data.class != '') {
            klases = widget.data.class;
            klases = klases.split(' ');
            in_array('fa-border', klases) ? klases.splice(klases.indexOf('fa-border'), 1) : '';
            in_array('fa-fw', klases) ? klases.splice(klases.indexOf('fa-fw'), 1) : '';
            in_array('fa-spin', klases) ? klases.splice(klases.indexOf('fa-spin'), 1) : '';
            in_array('fa-rotate-90', klases) ? klases.splice(klases.indexOf('fa-rotate-90'), 1) : '';
            in_array('fa-rotate-180', klases) ? klases.splice(klases.indexOf('fa-rotate-180'), 1) : '';
            in_array('fa-rotate-270', klases) ? klases.splice(klases.indexOf('fa-rotate-270'), 1) : '';
            in_array('fa-flip-horizontal', klases) ? klases.splice(klases.indexOf('fa-flip-horizontal'), 1) : '';
            in_array('fa-flip-vertical', klases) ? klases.splice(klases.indexOf('fa-flip-vertical'), 1) : '';
            klases = klases.join(' ');
          }
          this.setValue(klases);
        },
        commit: function(widget) {
          var klases = '';
          klases += document.getElementsByClassName('spinning')[0]
            .getElementsByTagName('input')[0].checked 
            ? ' fa-spin' : klases;

          klases += document.getElementsByClassName('fixedWidth')[0]
            .getElementsByTagName('input')[0].checked 
            ? ' fa-fw' : klases;

          klases += document.getElementsByClassName('bordered')[0]
            .getElementsByTagName('input')[0].checked 
            ? ' fa-border' : klases;

          klases += ' ' + document.getElementsByClassName('flippedRotation')[0]
            .getElementsByTagName('select')[0].value;

          widget.setData('class', this.getValue() + klases);
        }
      }, {
        type: 'html',
        html: '<div id="fontawesome">' + fontawesomeIcons + '</div>'
      }]
    }],
    onOk: function() {
      glyphs = document.getElementById('fontawesome');
      glyphs = glyphs.getElementsByTagName('a');
      for (i = 0; i < glyphs.length; i++) {
        glyphs[i].firstChild.className = glyphs[i].getAttribute('title');
        glyphs[i].className = '';
        glyphs[i].style.display = '';
        glyphs[i].getElementsByTagName('span')[0].style.color = '';
      }
    }
  }
});
