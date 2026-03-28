/* ============================================================
   80sGrid.com — quiz-data.js  v1.0
   Single source of truth for all 70 quiz files.
   
   Extracted from live site source (80sgrid.github.io-main).
   Gold standard: index.html (SCHEDULE array + nav map).

   Schema per entry:
     n    — quiz number (1 = index.html)
     f    — filename
     t    — title
     sub  — subtitle (artist byline)
     a[]  — 3 artist / column headers
     r[]  — 3 category / row headers
     d    — difficulty: 'easy' | 'medium' | 'hard'
     yn[] — cell keys that require yes/no answers
     ans  — answer key  { "row-col": ["answer", "alt", ...] }
     mc   — multiple choice { "row-col": ["A","B","C"] }
     og   — OG/Twitter meta { title, desc, url, img }
     social — share copy  { fb, ig, tt, tw, url }
   ============================================================ */

var QUIZ_DATA = [

  /* ─── Quiz 1: 80s Pop Giants ─── */
  {
    n: 1, f: "index.html",
    t: "80s Pop Giants",
    sub: "Duran Duran, Madonna & Michael Jackson",
    a: ["Duran Duran", "Madonna", "Michael Jackson"],
    r: ["Top 10 Hit in 1984", "Song with \"Girl\" in Title", "Song from 1987 Album"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["the reflex", "reflex", "new moon on monday"],
      "1-0": ["girls on film"],
      "2-0": ["notorious", "skin trade", "meet el presidente"],
      "0-1": ["like a virgin", "material girl", "borderline"],
      "1-1": ["material girl", "whos that girl"],
      "2-1": ["whos that girl", "causing a commotion", "the look of love"],
      "0-2": ["thriller", "billie jean", "beat it", "pyt"],
      "1-2": ["the girl is mine", "girl is mine", "liberian girl", "girlfriend"],
      "2-2": ["bad", "the way you make me feel", "man in the mirror", "dirty diana", "smooth criminal", "i just cant stop loving you"]
    },
    mc: {
      "0-0": ["The Reflex", "New Moon on Monday", "Girls on Film"],
      "1-0": ["Girls on Film", "Jesse's Girl", "Uptown Girl"],
      "2-0": ["Notorious", "Skin Trade", "A View to a Kill"],
      "0-1": ["Like a Virgin", "Material Girl", "Borderline"],
      "1-1": ["Material Girl", "Who's That Girl", "Cover Girl"],
      "2-1": ["Who's That Girl", "Causing a Commotion", "The Look of Love"],
      "0-2": ["Thriller", "Billie Jean", "Beat It"],
      "1-2": ["The Girl Is Mine", "Liberian Girl", "My Girl"],
      "2-2": ["Bad", "The Way You Make Me Feel", "Man in the Mirror"]
    },
    og: { title: "Len's 80sGrid.com \u2014 Daily Music Trivia", desc: "Can you match The Police, The Cure, and Depeche Mode to their songs, hits, and chart history? Play Quiz 3 on 80sGrid.com!", url: "https://80sgrid.com/", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played 80s Pop Giants on 80sGrid.com! Duran Duran, Madonna & Michael Jackson \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 1 \u2022 80s Pop Giants\nDuran Duran, Madonna & Michael Jackson\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Duran Duran, Madonna & Michael Jackson \u2014 do you know ALL their hits? Quiz 1 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played 80s Pop Giants on 80sGrid.com \ud83c\udfb8 Duran Duran, Madonna & Michael Jackson. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/" }
  },

  /* ─── Quiz 2: New Wave Around the World ─── */
  {
    n: 2, f: "quiz2.html",
    t: "New Wave Around the World",
    sub: "Simple Minds, OMD & INXS",
    a: ["Simple Minds", "OMD", "INXS"],
    r: ["Song from John Hughes Film", "Top 5 Hit in the 1980s", "Song Title with One Word"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["dont you forget about me"],
      "0-1": ["if you leave"],
      "0-2": ["do wot you do"],
      "1-0": ["dont you forget about me"],
      "1-1": ["if you leave"],
      "1-2": ["need you tonight", "devil inside", "new sensation"],
      "2-0": ["waterfront", "theme", "changeling"],
      "2-1": ["electricity", "dreaming", "secret", "souvenir"],
      "2-2": ["mystify", "disappear", "searching", "sometimes"]
    },
    mc: {
      "0-0": ["Don't You Forget About Me", "Alive and Kicking", "Sanctify Yourself"],
      "0-1": ["If You Leave", "Souvenir", "Enola Gay"],
      "0-2": ["Do Wot You Do", "Need You Tonight", "Mystify"],
      "1-0": ["Don't You Forget About Me", "Alive and Kicking", "Don't You"],
      "1-1": ["If You Leave", "Enola Gay", "So in Love"],
      "1-2": ["Need You Tonight", "Devil Inside", "New Sensation"],
      "2-0": ["Waterfront", "Theme", "Changeling"],
      "2-1": ["Electricity", "Dreaming", "Secret"],
      "2-2": ["Mystify", "Disappear", "Searching"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 2", desc: "Can you match Simple Minds, OMD, and INXS to their songs? Play Quiz 2 on 80sGrid.com!", url: "https://80sgrid.com/quiz2.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played New Wave Around the World on 80sGrid.com! Simple Minds, OMD & INXS \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 2 \u2022 New Wave Around the World\nSimple Minds, OMD & INXS\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Simple Minds, OMD & INXS \u2014 do you know ALL their hits? Quiz 2 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played New Wave Around the World on 80sGrid.com \ud83c\udfb8 Simple Minds, OMD & INXS. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz2.html" }
  },

  /* ─── Quiz 3: Dark Side of the 80s ─── */
  {
    n: 3, f: "quiz3.html",
    t: "Dark Side of the 80s",
    sub: "The Police, The Cure & Depeche Mode",
    a: ["The Police", "The Cure", "Depeche Mode"],
    r: ["Lead Singer's First Name", "Song with \"Night\" in Title", "Played Sold Out Concert at Rose Bowl"],
    d: "medium",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["sting", "gordon"],
      "0-1": ["robert"],
      "0-2": ["dave"],
      "1-0": ["bring on the night"],
      "1-1": ["1015 saturday night", "10 15 saturday night", "saturday night"],
      "1-2": ["waiting for the night to fall"],
      "2-0": ["no"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Sting", "Stewart", "Andy"],
      "0-1": ["Robert", "Roger", "Roland"],
      "0-2": ["Dave", "Stephen", "Philip"],
      "1-0": ["Bring on the Night", "In the Air Tonight", "All Night Long"],
      "1-1": ["10:15 Saturday Night", "All Through the Night", "Into the Night"],
      "1-2": ["Waiting for the Night to Fall", "Nightshift", "Tonight She Comes"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 3", desc: "Can you match The Police, The Cure, and Depeche Mode to their songs? Play Quiz 3 on 80sGrid.com!", url: "https://80sgrid.com/quiz3.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Dark Side of the 80s on 80sGrid.com! The Police, The Cure & Depeche Mode \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 3 \u2022 Dark Side of the 80s\nThe Police, The Cure & Depeche Mode\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "The Police, The Cure & Depeche Mode \u2014 do you know ALL their hits? Quiz 3 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Dark Side of the 80s on 80sGrid.com \ud83c\udfb8 The Police, The Cure & Depeche Mode. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz3.html" }
  },

  /* ─── Quiz 4: Royalty, Rock & the Obscure ─── */
  {
    n: 4, f: "quiz4.html",
    t: "Royalty, Rock & the Obscure",
    sub: "Prince, Queen & Flesh for Lulu",
    a: ["Prince", "Queen", "Flesh for Lulu"],
    r: ["Hit Song with \"Crazy\" in the Title", "First U.S. Top 40 Song", "Grammy? (Yes or No)"],
    d: "hard",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["lets go crazy", "go crazy"],
      "0-1": ["crazy little thing called love"],
      "0-2": ["i go crazy", "go crazy"],
      "1-0": ["i wanna be your lover", "wanna be your lover"],
      "1-1": ["killer queen"],
      "1-2": ["i go crazy", "go crazy"],
      "2-0": ["yes"],
      "2-1": ["no"],
      "2-2": ["no"]
    },
    mc: {
      "0-0": ["Let's Go Crazy", "Crazy for You", "She Drives Me Crazy"],
      "0-1": ["Crazy Little Thing Called Love", "Crazy Train", "Crazy Crazy Nights"],
      "0-2": ["I Go Crazy", "Crazy for You", "Crazy Train"],
      "1-0": ["I Wanna Be Your Lover", "Soft and Wet", "For You"],
      "1-1": ["Killer Queen", "Bohemian Rhapsody", "We Will Rock You"],
      "1-2": ["I Go Crazy", "Roman Candle", "Postcards from Paradise"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 4", desc: "Can you match Prince, Queen, and Flesh for Lulu to their hits? Play Quiz 4 on 80sGrid.com!", url: "https://80sgrid.com/quiz4.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Royalty, Rock & the Obscure on 80sGrid.com! Prince, Queen & Flesh for Lulu \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 4 \u2022 Royalty, Rock & the Obscure\nPrince, Queen & Flesh for Lulu\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Prince, Queen & Flesh for Lulu \u2014 do you know ALL their hits? Quiz 4 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Royalty, Rock & the Obscure on 80sGrid.com \ud83c\udfb8 Prince, Queen & Flesh for Lulu. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz4.html" }
  },

  /* ─── Quiz 5: Reggae, Roots & Art Rock ─── */
  {
    n: 5, f: "quiz5.html",
    t: "Reggae, Roots & Art Rock",
    sub: "UB40, Eddy Grant & Peter Gabriel",
    a: ["UB40", "Eddy Grant", "Peter Gabriel"],
    r: ["Top 5 U.S. Hit", "Anti-Apartheid Song", "Hit Song with \"Don't\" in the Title"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["red red wine", "i cant help falling in love with you", "cant help falling in love"],
      "0-1": ["electric avenue"],
      "0-2": ["sledgehammer"],
      "1-0": ["sing our own song"],
      "1-1": ["gimme hope joanna", "gimme hope jo anna"],
      "1-2": ["biko"],
      "2-0": ["dont break my heart"],
      "2-1": ["i dont wanna dance", "dont wanna dance"],
      "2-2": ["dont give up"]
    },
    mc: {
      "0-0": ["Red Red Wine", "Kingston Town", "Cherry Oh Baby"],
      "0-1": ["Electric Avenue", "Romancing the Stone", "Living on the Front Line"],
      "0-2": ["Sledgehammer", "In Your Eyes", "Big Time"],
      "1-0": ["Sing Our Own Song", "Red Red Wine", "Kingston Town"],
      "1-1": ["Gimme Hope Jo'Anna", "Electric Avenue", "War Party"],
      "1-2": ["Biko", "Games Without Frontiers", "Shock the Monkey"],
      "2-0": ["Don't Break My Heart", "Red Red Wine", "Rat in Mi Kitchen"],
      "2-1": ["I Don't Wanna Dance", "Electric Avenue", "Gimme Hope Joanna"],
      "2-2": ["Don't Give Up", "Don't You Want Me", "Don't Stop Me Now"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 5", desc: "Can you match UB40, Eddy Grant, and Peter Gabriel to their hits? Play Quiz 5 on 80sGrid.com!", url: "https://80sgrid.com/quiz5.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Reggae, Roots & Art Rock on 80sGrid.com! UB40, Eddy Grant & Peter Gabriel \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 5 \u2022 Reggae, Roots & Art Rock\nUB40, Eddy Grant & Peter Gabriel\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "UB40, Eddy Grant & Peter Gabriel \u2014 do you know ALL their hits? Quiz 5 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Reggae, Roots & Art Rock on 80sGrid.com \ud83c\udfb8 UB40, Eddy Grant & Peter Gabriel. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz5.html" }
  },

  /* ─── Quiz 6: Clever Pop & New Wave Crossovers ─── */
  {
    n: 6, f: "quiz6.html",
    t: "Clever Pop & New Wave Crossovers",
    sub: "Elvis Costello, ABC & Huey Lewis and the News",
    a: ["Elvis Costello", "ABC", "Huey Lewis and the News"],
    r: ["Hit Song with \"Love\" in the Title", "Best Selling Studio Album", "First Song with Video on MTV"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["whats so funny bout peace love and understanding", "peace love and understanding", "i wanna be loved"],
      "0-1": ["the look of love", "look of love"],
      "0-2": ["do you believe in love", "the power of love", "power of love"],
      "1-0": ["my aim is true"],
      "1-1": ["the lexicon of love", "lexicon of love"],
      "1-2": ["sports"],
      "2-0": ["olivers army"],
      "2-1": ["poison arrow"],
      "2-2": ["do you believe in love"]
    },
    mc: {
      "0-0": ["What's So Funny 'Bout Peace Love and Understanding", "Tainted Love", "Higher Love"],
      "0-1": ["The Look of Love", "Addicted to Love", "Is This Love"],
      "0-2": ["The Power of Love", "Love Is a Battlefield", "Greatest Love of All"],
      "1-0": ["My Aim Is True", "Imperial Bedroom", "Armed Forces"],
      "1-1": ["The Lexicon of Love", "Beauty Stab", "How to Be a Zillionaire"],
      "1-2": ["Sports", "Fore!", "Small World"],
      "2-0": ["Oliver's Army", "Watching the Detectives", "Pump It Up"],
      "2-1": ["Poison Arrow", "The Look of Love", "All of My Heart"],
      "2-2": ["Do You Believe in Love", "The Heart of Rock & Roll", "If This Is It"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 6", desc: "Can you match Elvis Costello, ABC, and Huey Lewis to their hits? Play Quiz 6 on 80sGrid.com!", url: "https://80sgrid.com/quiz6.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Clever Pop & New Wave Crossovers on 80sGrid.com! Elvis Costello, ABC & Huey Lewis and the News \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 6 \u2022 Clever Pop & New Wave Crossovers\nElvis Costello, ABC & Huey Lewis and the News\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Elvis Costello, ABC & Huey Lewis and the News \u2014 do you know ALL their hits? Quiz 6 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Clever Pop & New Wave Crossovers on 80sGrid.com \ud83c\udfb8 Elvis Costello, ABC & Huey Lewis and the News. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz6.html" }
  },

  /* ─── Quiz 7: Arena Rock Meets Pop Soul ─── */
  {
    n: 7, f: "quiz7.html",
    t: "Arena Rock Meets Pop Soul",
    sub: "Van Halen, Heart & Billy Ocean",
    a: ["Van Halen", "Heart", "Billy Ocean"],
    r: ["Hit Song with \"Dream\" in Title", "U.S. Billboard Hot 100 #1 Song", "Toured in 1986? (Yes or No)"],
    d: "easy",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["dreams"],
      "0-1": ["these dreams"],
      "0-2": ["get outta my dreams get into my car", "get outta my dreams"],
      "1-0": ["jump"],
      "1-1": ["these dreams", "alone"],
      "1-2": ["get outta my dreams", "caribbean queen", "therell be sad songs"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Dreams", "Sweet Dreams (Are Made of This)", "Electric Dreams"],
      "0-1": ["These Dreams", "Don't Dream It's Over", "Dream Police"],
      "0-2": ["Get Outta My Dreams, Get Into My Car", "Dreaming", "In Your Wildest Dreams"],
      "1-0": ["Jump", "Hot for Teacher", "Panama"],
      "1-1": ["Alone", "These Dreams", "Barracuda"],
      "1-2": ["Caribbean Queen", "Loverboy", "Suddenly"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 7", desc: "Can you match Van Halen, Heart, and Billy Ocean to their hits? Play Quiz 7 on 80sGrid.com!", url: "https://80sgrid.com/quiz7.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Arena Rock Meets Pop Soul on 80sGrid.com! Van Halen, Heart & Billy Ocean \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 7 \u2022 Arena Rock Meets Pop Soul\nVan Halen, Heart & Billy Ocean\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Van Halen, Heart & Billy Ocean \u2014 do you know ALL their hits? Quiz 7 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Arena Rock Meets Pop Soul on 80sGrid.com \ud83c\udfb8 Van Halen, Heart & Billy Ocean. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz7.html" }
  },

  /* ─── Quiz 8: Reinvention & Rock Royalty ─── */
  {
    n: 8, f: "quiz8.html",
    t: "Reinvention & Rock Royalty",
    sub: "Peter Gabriel, Cher & Lita Ford",
    a: ["Peter Gabriel", "Cher", "Lita Ford"],
    r: ["Hit Song with \"Kiss\" in Title", "Prior Group / Band", "Famous Duet With"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["kiss of life", "kiss that frog"],
      "0-1": ["the shoop shoop song", "shoop shoop song", "its in his kiss"],
      "0-2": ["kiss me deadly"],
      "1-0": ["genesis"],
      "1-1": ["sonny and cher", "sonny cher"],
      "1-2": ["the runaways", "runaways"],
      "2-0": ["kate bush"],
      "2-1": ["peter cetera", "cetera"],
      "2-2": ["ozzy osbourne", "ozzy"]
    },
    mc: {
      "0-0": ["Kiss of Life", "Kiss on My List", "Kiss the Bride"],
      "0-1": ["The Shoop Shoop Song (It's in His Kiss)", "Kiss", "Kisses on the Wind"],
      "0-2": ["Kiss Me Deadly", "Kiss on My List", "Kiss the Bride"],
      "1-0": ["Genesis", "The Lamb Lies Down on Broadway", "Peter Gabriel Band"],
      "1-1": ["Sonny & Cher", "The Wreckers", "Gregg Allman Band"],
      "1-2": ["The Runaways", "The Bangles", "The Go-Go's"],
      "2-0": ["Kate Bush", "Sinead O'Connor", "Annie Lennox"],
      "2-1": ["Peter Cetera", "David Bowie", "Meat Loaf"],
      "2-2": ["Ozzy Osbourne", "Jon Bon Jovi", "Dee Snider"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 8", desc: "Can you match Peter Gabriel, Cher, and Lita Ford to their hits? Play Quiz 8 on 80sGrid.com!", url: "https://80sgrid.com/quiz8.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Reinvention & Rock Royalty on 80sGrid.com! Peter Gabriel, Cher & Lita Ford \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 8 \u2022 Reinvention & Rock Royalty\nPeter Gabriel, Cher & Lita Ford\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Peter Gabriel, Cher & Lita Ford \u2014 do you know ALL their hits? Quiz 8 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Reinvention & Rock Royalty on 80sGrid.com \ud83c\udfb8 Peter Gabriel, Cher & Lita Ford. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz8.html" }
  },

  /* ─── Quiz 9: Pop, Hip-Hop & New Wave Collide ─── */
  {
    n: 9, f: "quiz9.html",
    t: "Pop, Hip-Hop & New Wave Collide",
    sub: "Phil Collins, Run DMC & Duran Duran",
    a: ["Phil Collins", "Run DMC", "Duran Duran"],
    r: ["Performed at Live Aid – London? (Y/N)", "Performed at Live Aid – Philadelphia? (Y/N)", "Biggest Hit 1985"],
    d: "medium",
    yn: ["0-0", "0-1", "0-2", "1-0", "1-1", "1-2"],
    ans: {
      "0-0": ["yes"],
      "0-1": ["no"],
      "0-2": ["no"],
      "1-0": ["yes"],
      "1-1": ["yes"],
      "1-2": ["yes"],
      "2-0": ["one more night", "sussudio", "separate lives", "against all odds"],
      "2-1": ["king of rock"],
      "2-2": ["a view to a kill"]
    },
    mc: {
      "2-0": ["One More Night", "Invisible Touch", "Easy Lover"],
      "2-1": ["King of Rock", "Rock Box", "Walk This Way"],
      "2-2": ["A View to a Kill", "The Reflex", "Wild Boys"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 9", desc: "Can you match Phil Collins, Run DMC, and Duran Duran to their 1985 moments? Play Quiz 9 on 80sGrid.com!", url: "https://80sgrid.com/quiz9.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Pop, Hip-Hop & New Wave Collide on 80sGrid.com! Phil Collins, Run DMC & Duran Duran \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 9 \u2022 Pop, Hip-Hop & New Wave Collide\nPhil Collins, Run DMC & Duran Duran\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Phil Collins, Run DMC & Duran Duran \u2014 do you know ALL their hits? Quiz 9 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Pop, Hip-Hop & New Wave Collide on 80sGrid.com \ud83c\udfb8 Phil Collins, Run DMC & Duran Duran. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz9.html" }
  },

  /* ─── Quiz 10: Cyndi, Boy George & Mr. Hutchence ─── */
  {
    n: 10, f: "quiz10.html",
    t: "Cyndi, Boy George & Mr. Hutchence",
    sub: "Culture Club, Cyndi Lauper & INXS",
    a: ["Culture Club", "Cyndi Lauper", "INXS"],
    r: ["Famous Song with \"Time\" in the Title", "First Album", "Country of Origin"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["time clock of the heart", "clock of the heart", "time"],
      "0-1": ["time after time"],
      "0-2": ["this time"],
      "1-0": ["kissing to be clever"],
      "1-1": ["shes so unusual", "she is so unusual"],
      "1-2": ["inxs"],
      "2-0": ["united kingdom", "uk", "england", "britain"],
      "2-1": ["united states", "usa", "us", "america"],
      "2-2": ["australia"]
    },
    mc: {
      "0-0": ["Time (Clock of the Heart)", "The Time of My Life", "Party All the Time"],
      "0-1": ["Time After Time", "Time Stand Still", "Time for Me to Fly"],
      "0-2": ["This Time", "Nick of Time", "Sign o' the Times"],
      "1-0": ["Kissing to Be Clever", "Colour by Numbers", "Waking Up with the House on Fire"],
      "1-1": ["She's So Unusual", "True Colors", "A Night to Remember"],
      "1-2": ["INXS", "Shabooh Shoobah", "The Swing"],
      "2-0": ["United Kingdom", "United States", "Australia"],
      "2-1": ["United States", "United Kingdom", "Canada"],
      "2-2": ["Australia", "New Zealand", "United Kingdom"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 10", desc: "Can you match Culture Club, Cyndi Lauper, and INXS to their hits? Play Quiz 10 on 80sGrid.com!", url: "https://80sgrid.com/quiz10.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Cyndi, Boy George & Mr. Hutchence on 80sGrid.com! Culture Club, Cyndi Lauper & INXS \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 10 \u2022 Cyndi, Boy George & Mr. Hutchence\nCulture Club, Cyndi Lauper & INXS\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Culture Club, Cyndi Lauper & INXS \u2014 do you know ALL their hits? Quiz 10 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Cyndi, Boy George & Mr. Hutchence on 80sGrid.com \ud83c\udfb8 Culture Club, Cyndi Lauper & INXS. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz10.html" }
  },

  /* ─── Quiz 11: New Wave Meets Pop Rock ─── */
  {
    n: 11, f: "quiz11.html",
    t: "New Wave Meets Pop Rock",
    sub: "Huey Lewis and the News, Elvis Costello & The Police",
    a: ["Huey Lewis and the News", "Elvis Costello", "The Police"],
    r: ["Highest Charting U.S. Single", "Best Selling Studio Album", "First Song with Video on MTV"],
    d: "hard",
    yn: [],
    ans: {
      "0-0": ["the power of love", "power of love"],
      "0-1": ["everyday i write the book"],
      "0-2": ["every breath you take"],
      "1-0": ["sports"],
      "1-1": ["this years model", "this year's model"],
      "1-2": ["synchronicity"],
      "2-0": ["workin for a livin", "workin' for a livin'", "working for a living"],
      "2-1": ["pump it up"],
      "2-2": ["every little thing she does is magic"]
    },
    mc: {
      "0-0": ["The Power of Love", "Hip to Be Square", "Stuck with You"],
      "0-1": ["Everyday I Write the Book", "Alison", "Pump It Up"],
      "0-2": ["Every Breath You Take", "Roxanne", "Don't Stand So Close to Me"],
      "1-0": ["Sports", "Fore!", "Picture This"],
      "1-1": ["This Year's Model", "My Aim Is True", "Armed Forces"],
      "1-2": ["Synchronicity", "Ghost in the Machine", "Zenyatta Mondatta"],
      "2-0": ["Workin' for a Livin'", "Do You Believe in Love", "The Power of Love"],
      "2-1": ["Pump It Up", "Oliver's Army", "Accidents Will Happen"],
      "2-2": ["Every Little Thing She Does Is Magic", "Don't Stand So Close to Me", "De Do Do Do, De Da Da Da"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 11", desc: "Can you match Huey Lewis and the News, Elvis Costello, and The Police to their songs, hits, and chart history? Play Quiz 11 on 80sGrid.com!", url: "https://80sgrid.com/quiz11.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played New Wave Meets Pop Rock on 80sGrid.com! Huey Lewis and the News, Elvis Costello & The Police \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 11 \u2022 New Wave Meets Pop Rock\nHuey Lewis and the News, Elvis Costello & The Police\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Huey Lewis and the News, Elvis Costello & The Police \u2014 do you know ALL their hits? Quiz 11 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played New Wave Meets Pop Rock on 80sGrid.com \ud83c\udfb8 Huey Lewis and the News, Elvis Costello & The Police. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz11.html" }
  },

  /* ─── Quiz 12: From Birmingham With Love ─── */
  {
    n: 12, f: "quiz12.html",
    t: "From Birmingham With Love",
    sub: "The English Beat, General Public & Fine Young Cannibals",
    a: ["The English Beat", "General Public", "Fine Young Cannibals"],
    r: ["Highest Charting U.S. Single (1980s)", "Most Famous Cover Song", "Debut Album"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["i confess"],
      "0-1": ["tenderness"],
      "0-2": ["she drives me crazy", "good thing"],
      "1-0": ["tears of a clown", "the tears of a clown"],
      "1-1": ["ill take you there", "i'll take you there"],
      "1-2": ["suspicious minds"],
      "2-0": ["i just cant stop it", "i just can't stop it"],
      "2-1": ["all the rage"],
      "2-2": ["fine young cannibals"]
    },
    mc: {
      "0-0": ["I Confess", "Mirror in the Bathroom", "Save It for Later"],
      "0-1": ["Tenderness", "Hot You're Cool", "Never You Done That"],
      "0-2": ["She Drives Me Crazy", "Good Thing", "Johnny Come Home"],
      "1-0": ["The Tears of a Clown", "Stand Down Margaret", "Hands Off She's Mine"],
      "1-1": ["I'll Take You There", "Come On Eileen", "Take Me to the River"],
      "1-2": ["Suspicious Minds", "Ever Fallen in Love", "Burning House of Love"],
      "2-0": ["I Just Can't Stop It", "Special Beat Service", "Wha'ppen"],
      "2-1": ["All the Rage", "Hand to Mouth", "...Rub It Better?"],
      "2-2": ["Fine Young Cannibals", "The Raw & The Cooked", "The Finest"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 12", desc: "Can you match The English Beat, General Public, and Fine Young Cannibals to their hits, covers, and debut albums?", url: "https://80sgrid.com/quiz12.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played From Birmingham With Love on 80sGrid.com! The English Beat, General Public & Fine Young Cannibals \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 12 \u2022 From Birmingham With Love\nThe English Beat, General Public & Fine Young Cannibals\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "The English Beat, General Public & Fine Young Cannibals \u2014 do you know ALL their hits? Quiz 12 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played From Birmingham With Love on 80sGrid.com \ud83c\udfb8 The English Beat, General Public & Fine Young Cannibals. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz12.html" }
  },

  /* ─── Quiz 13: Hard Rock, Blues & Attitude ─── */
  {
    n: 13, f: "quiz13.html",
    t: "Hard Rock, Blues & Attitude",
    sub: "Bon Jovi, George Thorogood &amp; the Destroyers & Joan Jett",
    a: ["Bon Jovi", "George Thorogood &amp; the Destroyers", "Joan Jett"],
    r: ["Famous Song with \"Bad\" in the Title", "In The Rock &amp; Roll Hall of Fame? (Y/N)", "Helped Save a Life? (Yes or No)"],
    d: "hard",
    yn: ["1-0", "1-1", "1-2", "2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["bad medicine", "you give love a bad name"],
      "0-1": ["bad to the bone"],
      "0-2": ["bad reputation"],
      "1-0": ["yes"],
      "1-1": ["no"],
      "1-2": ["yes"],
      "2-0": ["yes"],
      "2-1": ["no"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Bad Medicine", "You Give Love a Bad Name", "Bad Boys"],
      "0-1": ["Bad to the Bone", "Bad", "Bad Case of Loving You"],
      "0-2": ["Bad Reputation", "Bad Love", "Bad Moon Rising"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 13", desc: "Can you match Bon Jovi, George Thorogood & the Destroyers, and Joan Jett to their songs, hits, and chart history? Play Quiz 13 on 80sGrid.com!", url: "https://80sgrid.com/quiz13.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Hard Rock, Blues & Attitude on 80sGrid.com! Bon Jovi, George Thorogood &amp; the Destroyers & Joan Jett \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 13 \u2022 Hard Rock, Blues & Attitude\nBon Jovi, George Thorogood &amp; the Destroyers & Joan Jett\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Bon Jovi, George Thorogood &amp; the Destroyers & Joan Jett \u2014 do you know ALL their hits? Quiz 13 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Hard Rock, Blues & Attitude on 80sGrid.com \ud83c\udfb8 Bon Jovi, George Thorogood &amp; the Destroyers & Joan Jett. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz13.html" }
  },

  /* ─── Quiz 14: Three Eras, One Wild Ride ─── */
  {
    n: 14, f: "quiz14.html",
    t: "Three Eras, One Wild Ride",
    sub: "The Monkees, The Grateful Dead & Cher",
    a: ["The Monkees", "The Grateful Dead", "Cher"],
    r: ["Surprise 80s Hit Song", "2026 Tour? (Yes or No)", "Won an Emmy? (Yes or No)"],
    d: "hard",
    yn: ["1-0", "1-1", "1-2", "2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["that was then this is now"],
      "0-1": ["touch of grey", "touch of gray"],
      "0-2": ["if i could turn back time"],
      "1-0": ["yes"],
      "1-1": ["yes"],
      "1-2": ["no"],
      "2-0": ["yes"],
      "2-1": ["no"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["That Was Then, This Is Now", "Heart and Soul", "Daydream Believer"],
      "0-1": ["Touch of Grey", "Hell in a Bucket", "Truckin'"],
      "0-2": ["If I Could Turn Back Time", "Heart of Stone", "We All Sleep Alone"],
      "1-0": ["Yes", "No", "Unknown"],
      "1-1": ["Yes", "No", "Unknown"],
      "1-2": ["No", "Yes", "Unknown"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 14", desc: "Can you match The Monkees, The Grateful Dead, and Cher to their songs, hits, and chart history? Play Quiz 14 on 80sGrid.com!", url: "https://80sgrid.com/quiz14.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Three Eras, One Wild Ride on 80sGrid.com! The Monkees, The Grateful Dead & Cher \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 14 \u2022 Three Eras, One Wild Ride\nThe Monkees, The Grateful Dead & Cher\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "The Monkees, The Grateful Dead & Cher \u2014 do you know ALL their hits? Quiz 14 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Three Eras, One Wild Ride on 80sGrid.com \ud83c\udfb8 The Monkees, The Grateful Dead & Cher. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz14.html" }
  },

  /* ─── Quiz 15: Grooves That Defined the Decade ─── */
  {
    n: 15, f: "quiz15.html",
    t: "Grooves That Defined the Decade",
    sub: "Luther Vandross, Lionel Richie & Rick James",
    a: ["Luther Vandross", "Lionel Richie", "Rick James"],
    r: ["#1 R&amp;B Hit (1981)", "Famous Female Collab", "Won a Grammy in the 80s?"],
    d: "medium",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["never too much"],
      "0-1": ["endless love"],
      "0-2": ["give it to me baby"],
      "1-0": ["mariah carey", "mariah"],
      "1-1": ["diana ross", "diana"],
      "1-2": ["teena marie", "teena"],
      "2-0": ["no"],
      "2-1": ["yes"],
      "2-2": ["no"]
    },
    mc: {
      "0-0": ["Never Too Much", "Here and Now", "Dance With My Father"],
      "0-1": ["Endless Love", "Say You Say Me", "Hello"],
      "0-2": ["Give It to Me Baby", "Super Freak", "Cold Blooded"],
      "1-0": ["Mariah Carey", "Patti LaBelle", "Whitney Houston"],
      "1-1": ["Diana Ross", "Aretha Franklin", "Gladys Knight"],
      "1-2": ["Teena Marie", "Mary J. Blige", "Chaka Khan"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 15", desc: "Test your soul and R&B knowledge! Can you name hits by Luther Vandross, Lionel Richie, and Rick James?", url: "https://80sgrid.com/quiz15.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Grooves That Defined the Decade on 80sGrid.com! Luther Vandross, Lionel Richie & Rick James \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 15 \u2022 Grooves That Defined the Decade\nLuther Vandross, Lionel Richie & Rick James\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Luther Vandross, Lionel Richie & Rick James \u2014 do you know ALL their hits? Quiz 15 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Grooves That Defined the Decade on 80sGrid.com \ud83c\udfb8 Luther Vandross, Lionel Richie & Rick James. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz15.html" }
  },

  /* ─── Quiz 16: These Gals Rocked the 80s! ─── */
  {
    n: 16, f: "quiz16.html",
    t: "These Gals Rocked the 80s!",
    sub: "The Go-Go's, The Bangles & Bananarama",
    a: ["The Go-Go's", "The Bangles", "Bananarama"],
    r: ["Signature Hit", "Lead Singer's First Name", "Had a Billboard Hot 100 #1?"],
    d: "easy",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["we got the beat"],
      "0-1": ["walk like an egyptian"],
      "0-2": ["cruel summer", "venus"],
      "1-0": ["belinda"],
      "1-1": ["susanna", "susannah"],
      "1-2": ["sara", "keren", "siobhan"],
      "2-0": ["no"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["We Got the Beat", "Our Lips Are Sealed", "Vacation"],
      "0-1": ["Walk Like an Egyptian", "Eternal Flame", "Manic Monday"],
      "0-2": ["Cruel Summer", "Venus", "Really Saying Something"],
      "1-0": ["Belinda", "Charlotte", "Kathy"],
      "1-1": ["Susanna", "Vicki", "Debbi"],
      "1-2": ["Sara", "Siobhan", "Keren"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 16", desc: "Test your knowledge of the 80s biggest all-female acts \u2014 The Go-Go's, The Bangles, and Bananarama!", url: "https://80sgrid.com/quiz16.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played These Gals Rocked the 80s! on 80sGrid.com! The Go-Go's, The Bangles & Bananarama \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 16 \u2022 These Gals Rocked the 80s!\nThe Go-Go's, The Bangles & Bananarama\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "The Go-Go's, The Bangles & Bananarama \u2014 do you know ALL their hits? Quiz 16 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played These Gals Rocked the 80s! on 80sGrid.com \ud83c\udfb8 The Go-Go's, The Bangles & Bananarama. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz16.html" }
  },

  /* ─── Quiz 17: Beyond the Mainstream ─── */
  {
    n: 17, f: "quiz17.html",
    t: "Beyond the Mainstream",
    sub: "The Motels, Romeo Void & EBN-OZN",
    a: ["The Motels", "Romeo Void", "EBN-OZN"],
    r: ["Signature Hit", "City They Formed In", "Albums Released in the 80s"],
    d: "hard",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["only the lonely"],
      "0-1": ["never say never"],
      "0-2": ["aeiou sometimes y", "aeiou"],
      "1-0": ["los angeles", "la", "l.a."],
      "1-1": ["san francisco", "sf"],
      "1-2": ["new york", "nyc", "new york city"],
      "2-0": ["3", "three"],
      "2-1": ["2", "two"],
      "2-2": ["1", "one"]
    },
    mc: {
      "0-0": ["Only the Lonely", "Suddenly Last Summer", "Total Control"],
      "0-1": ["Never Say Never", "A Girl in Trouble", "Wrap It Up"],
      "0-2": ["AEIOU (Sometimes Y)", "Feeling Cavalier", "Electric Dreams"],
      "1-0": ["Los Angeles", "San Francisco", "New York"],
      "1-1": ["San Francisco", "Los Angeles", "Chicago"],
      "1-2": ["New York", "Los Angeles", "Boston"],
      "2-0": ["3", "4", "5"],
      "2-1": ["2", "3", "4"],
      "2-2": ["1", "2", "3"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 17", desc: "Can you name signature hits and origins of The Motels, Romeo Void, and EBN-OZN?", url: "https://80sgrid.com/quiz17.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Beyond the Mainstream on 80sGrid.com! The Motels, Romeo Void & EBN-OZN \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 17 \u2022 Beyond the Mainstream\nThe Motels, Romeo Void & EBN-OZN\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "The Motels, Romeo Void & EBN-OZN \u2014 do you know ALL their hits? Quiz 17 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Beyond the Mainstream on 80sGrid.com \ud83c\udfb8 The Motels, Romeo Void & EBN-OZN. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz17.html" }
  },

  /* ─── Quiz 18: Bigger Stages, Bigger Hair ─── */
  {
    n: 18, f: "quiz18.html",
    t: "Bigger Stages, Bigger Hair",
    sub: "Journey, Foreigner & REO Speedwagon",
    a: ["Journey", "Foreigner", "REO Speedwagon"],
    r: ["Signature Hit", "City They Formed In", "Name a Song with LOVE in the Title"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["don't stop believin", "don't stop believin'", "dont stop believin"],
      "0-1": ["i want to know what love is"],
      "0-2": ["can't fight this feeling", "cant fight this feeling"],
      "1-0": ["san francisco", "sf"],
      "1-1": ["new york", "new york city", "nyc"],
      "1-2": ["champaign", "champaign illinois", "champaign il"],
      "2-0": ["send her my love", "lovin' touchin' squeezin'", "lovin touchin squeezin"],
      "2-1": ["i want to know what love is", "love on the telephone"],
      "2-2": ["keep on loving you", "keep on lovin you", "cant fight this feeling"]
    },
    mc: {
      "0-0": ["Don't Stop Believin'", "Open Arms", "Any Way You Want It"],
      "0-1": ["I Want to Know What Love Is", "Cold as Ice", "Urgent"],
      "0-2": ["Can't Fight This Feeling", "Keep on Loving You", "Take It on the Run"],
      "1-0": ["San Francisco", "Los Angeles", "Chicago"],
      "1-1": ["New York", "London", "Boston"],
      "1-2": ["Champaign, IL", "Chicago, IL", "St. Louis, MO"],
      "2-0": ["Send Her My Love", "Lovin' Touchin' Squeezin'", "Crazy in Love"],
      "2-1": ["I Want to Know What Love Is", "Love on the Telephone", "Endless Love", "Love Bites"],
      "2-2": ["Keep on Loving You", "Love is a Battlefield", "What's Love Got to Do With It"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 18", desc: "Test your arena rock knowledge with Journey, Foreigner, and REO Speedwagon!", url: "https://80sgrid.com/quiz18.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Bigger Stages, Bigger Hair on 80sGrid.com! Journey, Foreigner & REO Speedwagon \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 18 \u2022 Bigger Stages, Bigger Hair\nJourney, Foreigner & REO Speedwagon\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Journey, Foreigner & REO Speedwagon \u2014 do you know ALL their hits? Quiz 18 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Bigger Stages, Bigger Hair on 80sGrid.com \ud83c\udfb8 Journey, Foreigner & REO Speedwagon. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz18.html" }
  },

  /* ─── Quiz 19: You Watched It on MTV ─── */
  {
    n: 19, f: "quiz19.html",
    t: "You Watched It on MTV",
    sub: "Remote Control, Yo! MTV Raps & Headbangers Ball",
    a: ["Remote Control", "Yo! MTV Raps", "Headbangers Ball"],
    r: ["Year It Premiered", "Host's Name", "Famous Guest Before They Were Famous"],
    d: "medium",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["1987"],
      "0-1": ["1988"],
      "0-2": ["1987"],
      "1-0": ["ken ober"],
      "1-1": ["fab 5 freddy", "fab five freddy", "fab freddy"],
      "1-2": ["riki rachtman"],
      "2-0": ["adam sandler"],
      "2-1": ["tupac", "biggie", "notorious big", "2pac", "biggie smalls"],
      "2-2": ["nirvana", "kurt cobain"]
    },
    mc: {
      "0-0": ["1987", "1986", "1989"],
      "0-1": ["1988", "1987", "1990"],
      "0-2": ["1987", "1986", "1988"],
      "1-0": ["Ken Ober", "Colin Quinn", "Dave Coulier"],
      "1-1": ["Fab 5 Freddy", "Ed Lover", "Doctor Dre"],
      "1-2": ["Riki Rachtman", "Dee Snider", "Lemmy Kilmister"],
      "2-0": ["Adam Sandler", "Ben Stiller", "Jim Carrey"],
      "2-1": ["Tupac", "Biggie", "Snoop Dogg"],
      "2-2": ["Nirvana", "Pearl Jam", "Soundgarden"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 19", desc: "Test your MTV show knowledge \u2014 Remote Control, Yo! MTV Raps, and Headbangers Ball!", url: "https://80sgrid.com/quiz19.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played You Watched It on MTV on 80sGrid.com! Remote Control, Yo! MTV Raps & Headbangers Ball \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 19 \u2022 You Watched It on MTV\nRemote Control, Yo! MTV Raps & Headbangers Ball\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Remote Control, Yo! MTV Raps & Headbangers Ball \u2014 do you know ALL their hits? Quiz 19 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played You Watched It on MTV on 80sGrid.com \ud83c\udfb8 Remote Control, Yo! MTV Raps & Headbangers Ball. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz19.html" }
  },

  /* ─── Quiz 20: Synth-Pop, New Wave & Everything Between ─── */
  {
    n: 20, f: "quiz20.html",
    t: "Synth-Pop, New Wave & Everything Between",
    sub: "Yazoo, Devo & They Might Be Giants",
    a: ["Yazoo", "Devo", "They Might Be Giants"],
    r: ["Signature Hit", "Country of Origin", "Still Recording Today?"],
    d: "hard",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["only you", "dont go", "don't go"],
      "0-1": ["whip it"],
      "0-2": ["birdhouse in your soul", "ana ng", "dont lets start", "istanbul"],
      "1-0": ["england", "uk", "united kingdom", "britain", "great britain"],
      "1-1": ["usa", "united states", "america", "ohio", "akron"],
      "1-2": ["usa", "united states", "america", "new york", "brooklyn"],
      "2-0": ["no"],
      "2-1": ["no"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Only You", "Don't Go", "Nobody's Diary"],
      "0-1": ["Whip It", "Jocko Homo", "Beautiful World"],
      "0-2": ["Birdhouse in Your Soul", "Ana Ng", "Istanbul"],
      "1-0": ["England", "Germany", "Ireland"],
      "1-1": ["USA", "UK", "Canada"],
      "1-2": ["USA", "UK", "Australia"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 20", desc: "Test your knowledge of Yazoo, Devo, and They Might Be Giants \u2014 three of the most distinctive acts of the 80s!", url: "https://80sgrid.com/quiz20.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Synth-Pop, New Wave & Everything Between on 80sGrid.com! Yazoo, Devo & They Might Be Giants \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 20 \u2022 Synth-Pop, New Wave & Everything Between\nYazoo, Devo & They Might Be Giants\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Yazoo, Devo & They Might Be Giants \u2014 do you know ALL their hits? Quiz 20 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Synth-Pop, New Wave & Everything Between on 80sGrid.com \ud83c\udfb8 Yazoo, Devo & They Might Be Giants. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz20.html" }
  },

  /* ─── Quiz 21: Boomer Stars Reaching GenXers ─── */
  {
    n: 21, f: "quiz21.html",
    t: "Boomer Stars Reaching GenXers",
    sub: "Blondie, Bryan Adams & Stevie Wonder",
    a: ["Blondie", "Bryan Adams", "Stevie Wonder"],
    r: ["Reggae-Styled Song", "Famous Song Written for a Movie", "Had a Billboard Hot 100 #1?"],
    d: "medium",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["the tide is high", "tide is high"],
      "0-1": ["reggae christmas"],
      "0-2": ["master blaster", "master blaster jammin"],
      "1-0": ["call me"],
      "1-1": ["everything i do i do it for you", "(everything i do) i do it for you"],
      "1-2": ["i just called to say i love you", "i just called to say i love you"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["The Tide Is High", "Heart of Glass", "Call Me"],
      "0-1": ["Reggae Christmas", "Summer of 69", "Run to You"],
      "0-2": ["Master Blaster (Jammin')", "Superstition", "Sir Duke"],
      "1-0": ["Call Me", "One Way or Another", "Rapture"],
      "1-1": ["(Everything I Do) I Do It for You", "Run to You", "Cuts Like a Knife"],
      "1-2": ["I Just Called to Say I Love You", "Ebony and Ivory", "Part-Time Lover"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 21", desc: "Can you match Blondie, Bryan Adams, and Stevie Wonder to their reggae songs, movie hits, and chart history?", url: "https://80sgrid.com/quiz21.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Boomer Stars Reaching GenXers on 80sGrid.com! Blondie, Bryan Adams & Stevie Wonder \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 21 \u2022 Boomer Stars Reaching GenXers\nBlondie, Bryan Adams & Stevie Wonder\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Blondie, Bryan Adams & Stevie Wonder \u2014 do you know ALL their hits? Quiz 21 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Boomer Stars Reaching GenXers on 80sGrid.com \ud83c\udfb8 Blondie, Bryan Adams & Stevie Wonder. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz21.html" }
  },

  /* ─── Quiz 22: Singer-Songwriter Royalty ─── */
  {
    n: 22, f: "quiz22.html",
    t: "Singer-Songwriter Royalty",
    sub: "Phil Collins, Paul McCartney & Jackson Browne",
    a: ["Phil Collins", "Paul McCartney", "Jackson Browne"],
    r: ["Famous 80s Duet Partner", "Still Touring? (Yes or No)", "Oscar Winner? (Yes or No)"],
    d: "medium",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["philip bailey", "phil bailey", "marilyn martin"],
      "0-1": ["michael jackson", "stevie wonder"],
      "0-2": ["clarence clemons"],
      "1-0": ["no"],
      "1-1": ["yes"],
      "1-2": ["no"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["no"]
    },
    mc: {
      "0-0": ["Philip Bailey", "Marilyn Martin", "Sting"],
      "0-1": ["Michael Jackson", "Stevie Wonder", "Linda McCartney"],
      "0-2": ["Clarence Clemons", "Don Henley", "Warren Zevon"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 22", desc: "Test your knowledge of Phil Collins, Paul McCartney, and Jackson Browne \u2014 duets, tours, and Oscars!", url: "https://80sgrid.com/quiz22.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Singer-Songwriter Royalty on 80sGrid.com! Phil Collins, Paul McCartney & Jackson Browne \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 22 \u2022 Singer-Songwriter Royalty\nPhil Collins, Paul McCartney & Jackson Browne\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Phil Collins, Paul McCartney & Jackson Browne \u2014 do you know ALL their hits? Quiz 22 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Singer-Songwriter Royalty on 80sGrid.com \ud83c\udfb8 Phil Collins, Paul McCartney & Jackson Browne. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz22.html" }
  },

  /* ─── Quiz 23: Pop, Rock & Hip-Hop Walk Into a Bar ─── */
  {
    n: 23, f: "quiz23.html",
    t: "Pop, Rock & Hip-Hop Walk Into a Bar",
    sub: "Wham!, Bruce Springsteen &amp; The E Street Band & Run-DMC",
    a: ["Wham!", "Bruce Springsteen &amp; The E Street Band", "Run-DMC"],
    r: ["Hit Christmas Song", "On 'A Very Special Christmas' Album?", "Deceased Band Member?"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["last christmas"],
      "0-1": ["santa claus is comin to town", "santa claus is coming to town", "santa claus"],
      "0-2": ["christmas in hollis"],
      "1-0": ["no"],
      "1-1": ["yes"],
      "1-2": ["yes"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Last Christmas", "Merry Christmas Everybody", "Do They Know It's Christmas"],
      "0-1": ["Santa Claus Is Comin' to Town", "Born to Run", "Glory Days"],
      "0-2": ["Christmas in Hollis", "It's Tricky", "Walk This Way"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 23", desc: "Test your knowledge of Wham!, Springsteen, and Run-DMC \u2014 Christmas songs and band history!", url: "https://80sgrid.com/quiz23.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Pop, Rock & Hip-Hop Walk Into a Bar on 80sGrid.com! Wham!, Bruce Springsteen &amp; The E Street Band & Run-DMC \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 23 \u2022 Pop, Rock & Hip-Hop Walk Into a Bar\nWham!, Bruce Springsteen &amp; The E Street Band & Run-DMC\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Wham!, Bruce Springsteen &amp; The E Street Band & Run-DMC \u2014 do you know ALL their hits? Quiz 23 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Pop, Rock & Hip-Hop Walk Into a Bar on 80sGrid.com \ud83c\udfb8 Wham!, Bruce Springsteen &amp; The E Street Band & Run-DMC. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz23.html" }
  },

  /* ─── Quiz 24: Do They Know It's a Quiz? ─── */
  {
    n: 24, f: "quiz24.html",
    t: "Do They Know It's a Quiz?",
    sub: "Bob Geldof, Kool &amp; the Gang & Prince",
    a: ["Bob Geldof", "Kool &amp; the Gang", "Prince"],
    r: ["Sang on 'Do They Know It's Christmas?' (1984)", "Sang on 'We Are the World' (1985)", "Performed at Live Aid (1985)?"],
    d: "hard",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["yes"],
      "0-1": ["yes"],
      "0-2": ["no"],
      "1-0": ["yes"],
      "1-1": ["no"],
      "1-2": ["no"],
      "2-0": ["yes"],
      "2-1": ["no"],
      "2-2": ["no"]
    },
    mc: {},
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 24", desc: "Test your charity music knowledge \u2014 who appeared on Band Aid, We Are the World, and Live Aid?", url: "https://80sgrid.com/quiz24.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Do They Know It's a Quiz? on 80sGrid.com! Bob Geldof, Kool &amp; the Gang & Prince \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 24 \u2022 Do They Know It's a Quiz?\nBob Geldof, Kool &amp; the Gang & Prince\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Bob Geldof, Kool &amp; the Gang & Prince \u2014 do you know ALL their hits? Quiz 24 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Do They Know It's a Quiz? on 80sGrid.com \ud83c\udfb8 Bob Geldof, Kool &amp; the Gang & Prince. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz24.html" }
  },

  /* ─── Quiz 25: Three Icons, Zero Overlap ─── */
  {
    n: 25, f: "quiz25.html",
    t: "Three Icons, Zero Overlap",
    sub: "Jimmy Cliff, Dusty Springfield & Neil Diamond",
    a: ["Jimmy Cliff", "Dusty Springfield", "Neil Diamond"],
    r: ["UB40 Covered This Song", "80s Hit Song", "Grammy Winner? (Yes or No)"],
    d: "hard",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["many rivers to cross"],
      "0-1": ["breakfast in bed"],
      "0-2": ["red red wine"],
      "1-0": ["reggae night", "many rivers to cross"],
      "1-1": ["what have i done to deserve this", "son of a preacher man"],
      "1-2": ["hello again", "america", "love on the rocks", "september morn"],
      "2-0": ["yes"],
      "2-1": ["no"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Many Rivers to Cross", "The Harder They Come", "You Can Get It If You Really Want"],
      "0-1": ["Breakfast in Bed", "Son of a Preacher Man", "I Only Want to Be with You"],
      "0-2": ["Red Red Wine", "Sweet Caroline", "Cherry Cherry"],
      "1-0": ["Reggae Night", "The Harder They Come", "Wonderful World Beautiful People"],
      "1-1": ["What Have I Done to Deserve This?", "Son of a Preacher Man", "You Don't Have to Say You Love Me"],
      "1-2": ["Hello Again", "America", "Love on the Rocks"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 25", desc: "Test your knowledge of Jimmy Cliff, Dusty Springfield, and Neil Diamond \u2014 and their UB40 connections!", url: "https://80sgrid.com/quiz25.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Three Icons, Zero Overlap on 80sGrid.com! Jimmy Cliff, Dusty Springfield & Neil Diamond \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 25 \u2022 Three Icons, Zero Overlap\nJimmy Cliff, Dusty Springfield & Neil Diamond\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Jimmy Cliff, Dusty Springfield & Neil Diamond \u2014 do you know ALL their hits? Quiz 25 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Three Icons, Zero Overlap on 80sGrid.com \ud83c\udfb8 Jimmy Cliff, Dusty Springfield & Neil Diamond. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz25.html" }
  },

  /* ─── Quiz 26: Post-Punk, Goth-Pop & Folk New Wave ─── */
  {
    n: 26, f: "quiz26.html",
    t: "Post-Punk, Goth-Pop & Folk New Wave",
    sub: "New Order, The Psychedelic Furs & Suzanne Vega",
    a: ["New Order", "The Psychedelic Furs", "Suzanne Vega"],
    r: ["Song on Pretty in Pink Soundtrack", "Highest Charting U.S. Single", "Concert at Radio City Music Hall (Yes or No)"],
    d: "hard",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["shellshock", "shell shock"],
      "0-1": ["pretty in pink"],
      "0-2": ["left of center"],
      "1-0": ["regret"],
      "1-1": ["heartbreak beat", "the heartbreak beat"],
      "1-2": ["luka"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Shellshock", "True Faith", "Bizarre Love Triangle"],
      "0-1": ["Pretty in Pink", "Love My Way", "The Ghost in You"],
      "0-2": ["Left of Center", "Luka", "Marlene on the Wall"],
      "1-0": ["Regret", "Blue Monday", "True Faith"],
      "1-1": ["Heartbreak Beat", "Pretty in Pink", "Dumb Waiters"],
      "1-2": ["Luka", "Tom's Diner", "Marlene on the Wall"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 26", desc: "Can you match New Order, The Psychedelic Furs, and Suzanne Vega to their songs, hits, and chart history? Play Quiz 26 on 80sGrid.com!", url: "https://80sgrid.com/quiz26.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Post-Punk, Goth-Pop & Folk New Wave on 80sGrid.com! New Order, The Psychedelic Furs & Suzanne Vega \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 26 \u2022 Post-Punk, Goth-Pop & Folk New Wave\nNew Order, The Psychedelic Furs & Suzanne Vega\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "New Order, The Psychedelic Furs & Suzanne Vega \u2014 do you know ALL their hits? Quiz 26 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Post-Punk, Goth-Pop & Folk New Wave on 80sGrid.com \ud83c\udfb8 New Order, The Psychedelic Furs & Suzanne Vega. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz26.html" }
  },

  /* ─── Quiz 27: Soundtracks, Power Pop & Passion ─── */
  {
    n: 27, f: "quiz27.html",
    t: "Soundtracks, Power Pop & Passion",
    sub: "Loverboy, Kenny Loggins & Berlin",
    a: ["Loverboy", "Kenny Loggins", "Berlin"],
    r: ["Song on Top Gun Soundtrack", "Won a Grammy (Yes or No)", "Top Charting U.S. Single"],
    d: "medium",
    yn: ["1-0", "1-1", "1-2"],
    ans: {
      "0-0": ["heaven in your eyes"],
      "0-1": ["danger zone", "playing with the boys"],
      "0-2": ["take my breath away"],
      "1-0": ["no"],
      "1-1": ["yes"],
      "1-2": ["yes"],
      "2-0": ["turn me loose"],
      "2-1": ["take my breath away"],
      "2-2": ["take my breath away"]
    },
    mc: {
      "0-0": ["Heaven in Your Eyes", "Working for the Weekend", "Hot Girls in Love"],
      "0-1": ["Danger Zone", "Playing with the Boys", "Meet Me Halfway"],
      "0-2": ["Take My Breath Away", "No More Words", "Metro"],
      "1-0": ["No", "Yes", "Not Sure"],
      "1-1": ["Yes", "No", "Not Sure"],
      "1-2": ["Yes", "No", "Not Sure"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 27", desc: "Can you match Loverboy, Kenny Loggins, and Berlin to their songs, hits, and chart history? Play Quiz 27 on 80sGrid.com!", url: "https://80sgrid.com/quiz27.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Soundtracks, Power Pop & Passion on 80sGrid.com! Loverboy, Kenny Loggins & Berlin \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 27 \u2022 Soundtracks, Power Pop & Passion\nLoverboy, Kenny Loggins & Berlin\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Loverboy, Kenny Loggins & Berlin \u2014 do you know ALL their hits? Quiz 27 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Soundtracks, Power Pop & Passion on 80sGrid.com \ud83c\udfb8 Loverboy, Kenny Loggins & Berlin. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz27.html" }
  },

  /* ─── Quiz 28: American Rock Across Three Styles ─── */
  {
    n: 28, f: "quiz28.html",
    t: "American Rock Across Three Styles",
    sub: "Jackson Browne, Tom Petty & Go-Go's",
    a: ["Jackson Browne", "Tom Petty", "Go-Go's"],
    r: ["Song from Fast Times at Ridgemont High", "Sold over 10 Million Albums in Career (Y/N)", "Billboard U.S. Top 5 Single (Yes or No)"],
    d: "hard",
    yn: ["1-0", "1-1", "1-2", "2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["somebody's baby", "somebodys baby"],
      "0-1": ["american girl"],
      "0-2": ["we got the beat"],
      "1-0": ["yes"],
      "1-1": ["yes"],
      "1-2": ["no"],
      "2-0": ["no"],
      "2-1": ["no"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Somebody's Baby", "Running on Empty", "The Pretender"],
      "0-1": ["American Girl", "Refugee", "Free Fallin'"],
      "0-2": ["We Got the Beat", "Our Lips Are Sealed", "Vacation"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 28", desc: "Can you match Jackson Browne, Tom Petty, and Go-Go's to their songs, hits, and chart history? Play Quiz 28 on 80sGrid.com!", url: "https://80sgrid.com/quiz28.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played American Rock Across Three Styles on 80sGrid.com! Jackson Browne, Tom Petty & Go-Go's \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 28 \u2022 American Rock Across Three Styles\nJackson Browne, Tom Petty & Go-Go's\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Jackson Browne, Tom Petty & Go-Go's \u2014 do you know ALL their hits? Quiz 28 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played American Rock Across Three Styles on 80sGrid.com \ud83c\udfb8 Jackson Browne, Tom Petty & Go-Go's. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz28.html" }
  },

  /* ─── Quiz 29: Fictional Bands Only True Fans Know ─── */
  {
    n: 29, f: "quiz29.html",
    t: "Fictional Bands Only True Fans Know",
    sub: "Marvin Berry and the Starlighters, Morris Day and the Time & The Sorels",
    a: ["Marvin Berry and the Starlighters", "Morris Day and the Time", "The Sorels"],
    r: ["Real or Fake Band", "What Movie Did Band Perform In", "Song Performed In Movie"],
    d: "hard",
    yn: ["0-0", "0-1", "0-2"],
    ans: {
      "0-0": ["fake"],
      "0-1": ["back to the future"],
      "0-2": ["earth angel"],
      "1-0": ["real"],
      "1-1": ["purple rain"],
      "1-2": ["jungle love", "the bird"],
      "2-0": ["fake"],
      "2-1": ["streets of fire"],
      "2-2": ["i can dream about you"]
    },
    mc: {
      "0-0": ["Fake", "Real", "Not Sure"],
      "0-1": ["Back to the Future", "Purple Rain", "Streets of Fire"],
      "0-2": ["Earth Angel", "Johnny B. Goode", "Power of Love"],
      "1-0": ["Real", "Fake", "Not Sure"],
      "1-1": ["Purple Rain", "Back to the Future", "Streets of Fire"],
      "1-2": ["Jungle Love", "The Bird", "Raspberry Beret"],
      "2-0": ["Fake", "Real", "Not Sure"],
      "2-1": ["Streets of Fire", "Purple Rain", "Back to the Future"],
      "2-2": ["I Can Dream About You", "Tonight Is What It Means to Be Young", "Nowhere Fast"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 29", desc: "Can you match Marvin Berry and the Starlighters, Morris Day and the Time, and The Sorels to their songs, hits, and chart history? Play Quiz 29 on 80sGrid.com!", url: "https://80sgrid.com/quiz29.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Fictional Bands Only True Fans Know on 80sGrid.com! Marvin Berry and the Starlighters, Morris Day and the Time & The Sorels \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 29 \u2022 Fictional Bands Only True Fans Know\nMarvin Berry and the Starlighters, Morris Day and the Time & The Sorels\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Marvin Berry and the Starlighters, Morris Day and the Time & The Sorels \u2014 do you know ALL their hits? Quiz 29 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Fictional Bands Only True Fans Know on 80sGrid.com \ud83c\udfb8 Marvin Berry and the Starlighters, Morris Day and the Time & The Sorels. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz29.html" }
  },

  /* ─── Quiz 30: Three Very Different Pop Stories ─── */
  {
    n: 30, f: "quiz30.html",
    t: "Three Very Different Pop Stories",
    sub: "Boy George, Phil Collins & Andy Gibb",
    a: ["Boy George", "Phil Collins", "Andy Gibb"],
    r: ["Guest Starred on Popular 80s TV Show", "Song with \"Everything\" In Title", "In a Band Prior to Solo Career (Yes or No)"],
    d: "medium",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["the a-team", "a-team"],
      "0-1": ["everything i own"],
      "0-2": ["yes"],
      "1-0": ["miami vice"],
      "1-1": ["everything that i am"],
      "1-2": ["yes"],
      "2-0": ["punky brewster"],
      "2-1": ["i just want to be your everything", "i wanna be your everything"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["The A-Team", "Miami Vice", "Punky Brewster"],
      "0-1": ["Everything I Own", "Everything I Do", "Everything She Wants"],
      "0-2": ["Yes", "No", "Not Sure"],
      "1-0": ["Miami Vice", "The A-Team", "Magnum P.I."],
      "1-1": ["Everything That I Am", "Everything I Own", "All of My Life"],
      "1-2": ["Yes", "No", "Not Sure"],
      "2-0": ["Punky Brewster", "The A-Team", "Miami Vice"],
      "2-1": ["I Just Want to Be Your Everything", "Everything Is Beautiful", "All I Have to Do Is Dream"],
      "2-2": ["Yes", "No", "Not Sure"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 30", desc: "Can you match Boy George, Phil Collins, and Andy Gibb to their songs, hits, and chart history? Play Quiz 30 on 80sGrid.com!", url: "https://80sgrid.com/quiz30.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Three Very Different Pop Stories on 80sGrid.com! Boy George, Phil Collins & Andy Gibb \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 30 \u2022 Three Very Different Pop Stories\nBoy George, Phil Collins & Andy Gibb\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Boy George, Phil Collins & Andy Gibb \u2014 do you know ALL their hits? Quiz 30 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Three Very Different Pop Stories on 80sGrid.com \ud83c\udfb8 Boy George, Phil Collins & Andy Gibb. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz30.html" }
  },

  /* ─── Quiz 31: Big Hair, Bigger Anthems ─── */
  {
    n: 31, f: "quiz31.html",
    t: "Big Hair, Bigger Anthems",
    sub: "Poison, Bon Jovi & M&ouml;tley Cr&uuml;e",
    a: ["Poison", "Bon Jovi", "M&ouml;tley Cr&uuml;e"],
    r: ["Lead Singer", "Lead Guitar", "Drummer"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["bret michaels", "brett michaels"],
      "0-1": ["jon bon jovi"],
      "0-2": ["vince neil", "vince neal"],
      "1-0": ["c.c. deville", "cc deville"],
      "1-1": ["richie sambora"],
      "1-2": ["mick mars"],
      "2-0": ["rikki rockett"],
      "2-1": ["tico torres"],
      "2-2": ["tommy lee"]
    },
    mc: {
      "0-0": ["Bret Michaels", "Bobby Dall", "C.C. DeVille"],
      "0-1": ["Jon Bon Jovi", "Richie Sambora", "David Bryan"],
      "0-2": ["Vince Neil", "Nikki Sixx", "Tommy Lee"],
      "1-0": ["C.C. DeVille", "Bobby Dall", "Bret Michaels"],
      "1-1": ["Richie Sambora", "David Bryan", "Alec John Such"],
      "1-2": ["Mick Mars", "Nikki Sixx", "Vince Neil"],
      "2-0": ["Rikki Rockett", "Bobby Dall", "C.C. DeVille"],
      "2-1": ["Tico Torres", "David Bryan", "Hugh McDonald"],
      "2-2": ["Tommy Lee", "Nikki Sixx", "Mick Mars"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 31", desc: "Can you name the classic lineups of Poison, Bon Jovi, and Motley Crue?", url: "https://80sgrid.com/quiz31.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Big Hair, Bigger Anthems on 80sGrid.com! Poison, Bon Jovi & M&ouml;tley Cr&uuml;e \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 31 \u2022 Big Hair, Bigger Anthems\nPoison, Bon Jovi & M&ouml;tley Cr&uuml;e\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Poison, Bon Jovi & M&ouml;tley Cr&uuml;e \u2014 do you know ALL their hits? Quiz 31 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Big Hair, Bigger Anthems on 80sGrid.com \ud83c\udfb8 Poison, Bon Jovi & M&ouml;tley Cr&uuml;e. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz31.html" }
  },

  /* ─── Quiz 32: AOR Giants Meet the Queen of Pop ─── */
  {
    n: 32, f: "quiz32.html",
    t: "AOR Giants Meet the Queen of Pop",
    sub: "Foreigner, Journey & Madonna",
    a: ["Foreigner", "Journey", "Madonna"],
    r: ["Vision Quest Soundtrack Song", "80's Highest Charting U.S. Single", "Rock and Roll Hall of Fame (Yes or No)"],
    d: "medium",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["hot blooded"],
      "0-1": ["only the young"],
      "0-2": ["crazy for you", "gambler"],
      "1-0": ["i want to know what love is"],
      "1-1": ["open arms"],
      "1-2": ["like a virgin", "crazy for you", "live to tell", "papa don't preach", "papa dont preach", "open your heart", "who's that girl", "whos that girl", "like a prayer"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Hot Blooded", "Waiting for a Girl Like You", "Urgent"],
      "0-1": ["Only the Young", "Don't Stop Believin'", "Faithfully"],
      "0-2": ["Crazy for You", "Material Girl", "Into the Groove"],
      "1-0": ["I Want to Know What Love Is", "Waiting for a Girl Like You", "Urgent"],
      "1-1": ["Open Arms", "Don't Stop Believin'", "Faithfully"],
      "1-2": ["Like a Virgin", "Papa Don't Preach", "Like a Prayer"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 32", desc: "Match Foreigner, Journey, and Madonna to soundtrack songs, chart hits, and Hall of Fame status", url: "https://80sgrid.com/quiz32.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played AOR Giants Meet the Queen of Pop on 80sGrid.com! Foreigner, Journey & Madonna \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 32 \u2022 AOR Giants Meet the Queen of Pop\nForeigner, Journey & Madonna\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Foreigner, Journey & Madonna \u2014 do you know ALL their hits? Quiz 32 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played AOR Giants Meet the Queen of Pop on 80sGrid.com \ud83c\udfb8 Foreigner, Journey & Madonna. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz32.html" }
  },

  /* ─── Quiz 33: Three Bands, Forty Years of Hits ─── */
  {
    n: 33, f: "quiz33.html",
    t: "Three Bands, Forty Years of Hits",
    sub: "The Police, Genesis & Duran Duran",
    a: ["The Police", "Genesis", "Duran Duran"],
    r: ["Lead Singer", "Lead Guitar", "80s Highest Charting U.S. Album"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["sting"],
      "0-1": ["phil collins"],
      "0-2": ["simon le bon"],
      "1-0": ["andy summers"],
      "1-1": ["mike rutherford"],
      "1-2": ["andy taylor"],
      "2-0": ["synchronicity"],
      "2-1": ["invisible touch"],
      "2-2": ["seven and the ragged tiger"]
    },
    mc: {
      "0-0": ["Sting", "Andy Summers", "Stewart Copeland"],
      "0-1": ["Phil Collins", "Peter Gabriel", "Mike Rutherford"],
      "0-2": ["Simon Le Bon", "Nick Rhodes", "John Taylor"],
      "1-0": ["Andy Summers", "Sting", "Stewart Copeland"],
      "1-1": ["Mike Rutherford", "Phil Collins", "Tony Banks"],
      "1-2": ["Andy Taylor", "John Taylor", "Roger Taylor"],
      "2-0": ["Synchronicity", "Ghost in the Machine", "Zenyatta Mondatta"],
      "2-1": ["Invisible Touch", "Genesis", "Duke"],
      "2-2": ["Seven and the Ragged Tiger", "Rio", "Arena"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 33", desc: "Name the classic lineups of The Police, Genesis, and Duran Duran", url: "https://80sgrid.com/quiz33.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Three Bands, Forty Years of Hits on 80sGrid.com! The Police, Genesis & Duran Duran \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 33 \u2022 Three Bands, Forty Years of Hits\nThe Police, Genesis & Duran Duran\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "The Police, Genesis & Duran Duran \u2014 do you know ALL their hits? Quiz 33 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Three Bands, Forty Years of Hits on 80sGrid.com \ud83c\udfb8 The Police, Genesis & Duran Duran. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz33.html" }
  },

  /* ─── Quiz 34: Imagine playing on softball team with these people!! ─── */
  {
    n: 34, f: "quiz34.html",
    t: "Imagine playing on softball team with these people!!",
    sub: "Bryan Adams, Wham! & Bon Jovi",
    a: ["Bryan Adams", "Wham!", "Bon Jovi"],
    r: ["Country of Origin", "Highest Charting U.S. 80s Album", "Grammy? (Yes or No)"],
    d: "medium",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["canada"],
      "0-1": ["england", "united kingdom", "uk"],
      "0-2": ["united states", "usa", "us", "america"],
      "1-0": ["reckless"],
      "1-1": ["make it big"],
      "1-2": ["slippery when wet", "new jersey"],
      "2-0": ["yes"],
      "2-1": ["no"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Canada", "United States", "England"],
      "0-1": ["England", "Australia", "United States"],
      "0-2": ["United States", "Canada", "England"],
      "1-0": ["Reckless", "Cuts Like a Knife", "Into the Fire"],
      "1-1": ["Make It Big", "Fantastic", "Music from the Edge of Heaven"],
      "1-2": ["Slippery When Wet", "New Jersey", "7800 Fahrenheit"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 34", desc: "Match Bryan Adams, Wham!, and Bon Jovi to their origins, albums, and Grammy history", url: "https://80sgrid.com/quiz34.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Imagine playing on softball team with these people!! on 80sGrid.com! Bryan Adams, Wham! & Bon Jovi \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 34 \u2022 Imagine playing on softball team with these people!!\nBryan Adams, Wham! & Bon Jovi\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Bryan Adams, Wham! & Bon Jovi \u2014 do you know ALL their hits? Quiz 34 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Imagine playing on softball team with these people!! on 80sGrid.com \ud83c\udfb8 Bryan Adams, Wham! & Bon Jovi. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz34.html" }
  },

  /* ─── Quiz 35: Hard Rock Holy Trinity ─── */
  {
    n: 35, f: "quiz35.html",
    t: "Hard Rock Holy Trinity",
    sub: "Van Halen, Def Leppard & AC/DC",
    a: ["Van Halen", "Def Leppard", "AC/DC"],
    r: ["Number of Lead Singers", "Highest Charting U.S. 80s Album", "Rock N' Roll Hall of Fame (Yes or No)"],
    d: "medium",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["three", "3"],
      "0-1": ["one", "1"],
      "0-2": ["two", "2"],
      "1-0": ["5150", "ou812"],
      "1-1": ["hysteria"],
      "1-2": ["for those about to rock we salute you", "for those about to rock"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Three", "Two", "One"],
      "0-1": ["One", "Two", "Three"],
      "0-2": ["Two", "One", "Three"],
      "1-0": ["5150", "1984", "OU812"],
      "1-1": ["Hysteria", "Pyromania", "High 'n' Dry"],
      "1-2": ["For Those About to Rock", "Back in Black", "The Razors Edge"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 35", desc: "Can you match Van Halen, Def Leppard & AC/DC to their songs, hits, and chart history? Play Quiz 35 on 80sGrid.com!", url: "https://80sgrid.com/quiz35.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Hard Rock Holy Trinity on 80sGrid.com! Van Halen, Def Leppard & AC/DC \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 35 \u2022 Hard Rock Holy Trinity\nVan Halen, Def Leppard & AC/DC\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Van Halen, Def Leppard & AC/DC \u2014 do you know ALL their hits? Quiz 35 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Hard Rock Holy Trinity on 80sGrid.com \ud83c\udfb8 Van Halen, Def Leppard & AC/DC. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz35.html" }
  },

  /* ─── Quiz 36: Prog, AOR & Down Under Cool ─── */
  {
    n: 36, f: "quiz36.html",
    t: "Prog, AOR & Down Under Cool",
    sub: "Rush, Journey & INXS",
    a: ["Rush", "Journey", "INXS"],
    r: ["1980's Lead Singer", "1980's Lead Guitar", "1980's Drummer"],
    d: "hard",
    yn: [],
    ans: {
      "0-0": ["geddy lee"],
      "0-1": ["steve perry", "greg rolie"],
      "0-2": ["michael hutchence"],
      "1-0": ["alex lifeson"],
      "1-1": ["neal schon"],
      "1-2": ["tim farriss"],
      "2-0": ["neil peart"],
      "2-1": ["steve smith"],
      "2-2": ["jon farriss"]
    },
    mc: {
      "0-0": ["Geddy Lee", "Alex Lifeson", "Neil Peart"],
      "0-1": ["Steve Perry", "Neal Schon", "Jonathan Cain"],
      "0-2": ["Michael Hutchence", "Andrew Farriss", "Tim Farriss"],
      "1-0": ["Alex Lifeson", "Geddy Lee", "Neil Peart"],
      "1-1": ["Neal Schon", "Jonathan Cain", "Steve Perry"],
      "1-2": ["Tim Farriss", "Kirk Pengilly", "Andrew Farriss"],
      "2-0": ["Neil Peart", "Geddy Lee", "Alex Lifeson"],
      "2-1": ["Steve Smith", "Aynsley Dunbar", "Deen Castronovo"],
      "2-2": ["Jon Farriss", "Andrew Farriss", "Tim Farriss"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 36", desc: "Name the classic 80s lineups of Rush, Journey, and INXS", url: "https://80sgrid.com/quiz36.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Prog, AOR & Down Under Cool on 80sGrid.com! Rush, Journey & INXS \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 36 \u2022 Prog, AOR & Down Under Cool\nRush, Journey & INXS\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Rush, Journey & INXS \u2014 do you know ALL their hits? Quiz 36 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Prog, AOR & Down Under Cool on 80sGrid.com \ud83c\udfb8 Rush, Journey & INXS. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz36.html" }
  },

  /* ─── Quiz 37: The Year Everyone Had a Number One ─── */
  {
    n: 37, f: "quiz37.html",
    t: "The Year Everyone Had a Number One",
    sub: "U2, Michael Jackson & Huey Lewis and the News",
    a: ["U2", "Michael Jackson", "Huey Lewis and the News"],
    r: ["1980s Album with One Word Title", "Played at 1985 Live Aid Concert (Yes or No)", "#1 US Single in the 1980s (Yes or No)"],
    d: "medium",
    yn: ["1-0", "1-1", "1-2", "2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["boy", "war", "october"],
      "0-1": ["thriller", "bad"],
      "0-2": ["sports", "fore", "fore!"],
      "1-0": ["yes"],
      "1-1": ["no"],
      "1-2": ["no"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["War", "Boy", "October"],
      "0-1": ["Thriller", "Bad", "Dangerous"],
      "0-2": ["Sports", "Fore!", "Picture This"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 37", desc: "Match U2, Michael Jackson, and Huey Lewis to albums, Live Aid, and chart history", url: "https://80sgrid.com/quiz37.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played The Year Everyone Had a Number One on 80sGrid.com! U2, Michael Jackson & Huey Lewis and the News \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 37 \u2022 The Year Everyone Had a Number One\nU2, Michael Jackson & Huey Lewis and the News\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "U2, Michael Jackson & Huey Lewis and the News \u2014 do you know ALL their hits? Quiz 37 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played The Year Everyone Had a Number One on 80sGrid.com \ud83c\udfb8 U2, Michael Jackson & Huey Lewis and the News. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz37.html" }
  },

  /* ─── Quiz 38: Rock, Piano & Rocket Man ─── */
  {
    n: 38, f: "quiz38.html",
    t: "Rock, Piano & Rocket Man",
    sub: "Pat Benatar, Billy Joel & Elton John",
    a: ["Pat Benatar", "Billy Joel", "Elton John"],
    r: ["Video on First Day of MTV (Yes or No)", "#1 1980s US Single incl. collabs (Yes or No)", "#1 1980s US Album (Yes or No)"],
    d: "hard",
    yn: ["0-0", "0-1", "0-2", "1-0", "1-1", "1-2", "2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["yes"],
      "0-1": ["no"],
      "0-2": ["no"],
      "1-0": ["no"],
      "1-1": ["yes"],
      "1-2": ["yes"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["no"]
    },
    mc: {},
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 38", desc: "Yes or No for Pat Benatar, Billy Joel, and Elton John on MTV, singles, and albums", url: "https://80sgrid.com/quiz38.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Rock, Piano & Rocket Man on 80sGrid.com! Pat Benatar, Billy Joel & Elton John \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 38 \u2022 Rock, Piano & Rocket Man\nPat Benatar, Billy Joel & Elton John\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Pat Benatar, Billy Joel & Elton John \u2014 do you know ALL their hits? Quiz 38 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Rock, Piano & Rocket Man on 80sGrid.com \ud83c\udfb8 Pat Benatar, Billy Joel & Elton John. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz38.html" }
  },

  /* ─── Quiz 39: Rock Legends on Both Sides of the Atlantic ─── */
  {
    n: 39, f: "quiz39.html",
    t: "Rock Legends on Both Sides of the Atlantic",
    sub: "Aerosmith, Queen & Dire Straits",
    a: ["Aerosmith", "Queen", "Dire Straits"],
    r: ["Famous Collaboration (Name the Other Artist)", "Highest U.S. Charting 1980s Album", "Country of Origin"],
    d: "hard",
    yn: [],
    ans: {
      "0-0": ["run dmc", "run-dmc"],
      "0-1": ["david bowie"],
      "0-2": ["sting"],
      "1-0": ["pump"],
      "1-1": ["the game", "game"],
      "1-2": ["brothers in arms"],
      "2-0": ["united states", "usa", "us", "america"],
      "2-1": ["united kingdom", "england", "uk"],
      "2-2": ["united kingdom", "england", "uk"]
    },
    mc: {
      "0-0": ["Run-DMC", "LL Cool J", "Beastie Boys"],
      "0-1": ["David Bowie", "Elton John", "Roger Taylor"],
      "0-2": ["Sting", "Eric Clapton", "Phil Collins"],
      "1-0": ["Pump", "Permanent Vacation", "Done with Mirrors"],
      "1-1": ["The Game", "A Kind of Magic", "The Works"],
      "1-2": ["Brothers in Arms", "Love Over Gold", "Making Movies"],
      "2-0": ["United States", "England", "Canada"],
      "2-1": ["United Kingdom", "United States", "Australia"],
      "2-2": ["United Kingdom", "United States", "Ireland"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 39", desc: "Match Aerosmith, Queen, and Dire Straits to collaborations, albums, and origins", url: "https://80sgrid.com/quiz39.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Rock Legends on Both Sides of the Atlantic on 80sGrid.com! Aerosmith, Queen & Dire Straits \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 39 \u2022 Rock Legends on Both Sides of the Atlantic\nAerosmith, Queen & Dire Straits\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Aerosmith, Queen & Dire Straits \u2014 do you know ALL their hits? Quiz 39 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Rock Legends on Both Sides of the Atlantic on 80sGrid.com \ud83c\udfb8 Aerosmith, Queen & Dire Straits. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz39.html" }
  },

  /* ─── Quiz 40: The Voices Behind the Bands ─── */
  {
    n: 40, f: "quiz40.html",
    t: "The Voices Behind the Bands",
    sub: "Dennis DeYoung, Phil Collins & Lou Gramm",
    a: ["Dennis DeYoung", "Phil Collins", "Lou Gramm"],
    r: ["Band", "Highest Charting U.S. Solo Hit", "Top 25 US Album as solo artist (Yes or No)"],
    d: "hard",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["styx"],
      "0-1": ["genesis"],
      "0-2": ["foreigner"],
      "1-0": ["desert moon"],
      "1-1": ["against all odds", "sussudio", "one more night", "separate lives", "two hearts", "a groovy kind of love", "a groovy kinda love", "another day in paradise"],
      "1-2": ["midnight blue"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Styx", "REO Speedwagon", "Kansas"],
      "0-1": ["Genesis", "Brand X", "Flaming Youth"],
      "0-2": ["Foreigner", "Black Sheep", "Shadow King"],
      "1-0": ["Desert Moon", "Call Me", "Don't Wait for Heroes"],
      "1-1": ["Against All Odds", "Sussudio", "One More Night"],
      "1-2": ["Midnight Blue", "Just Between You and Me", "True Blue Love"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 40", desc: "Match Dennis DeYoung, Phil Collins, and Lou Gramm to bands, solo hits, and album success", url: "https://80sgrid.com/quiz40.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played The Voices Behind the Bands on 80sGrid.com! Dennis DeYoung, Phil Collins & Lou Gramm \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 40 \u2022 The Voices Behind the Bands\nDennis DeYoung, Phil Collins & Lou Gramm\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Dennis DeYoung, Phil Collins & Lou Gramm \u2014 do you know ALL their hits? Quiz 40 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played The Voices Behind the Bands on 80sGrid.com \ud83c\udfb8 Dennis DeYoung, Phil Collins & Lou Gramm. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz40.html" }
  },

  /* ─── Quiz 41: Hard Rock Holy Trinity Vol. 2 ─── */
  {
    n: 41, f: "quiz41.html",
    t: "Hard Rock Holy Trinity Vol. 2",
    sub: "Van Halen, Def Leppard & AC/DC",
    a: ["Van Halen", "Def Leppard", "AC/DC"],
    r: ["Number of Lead Singers", "Highest Charting U.S. 80s Album", "Rock N' Roll Hall of Fame (Yes or No)"],
    d: "easy",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["three", "3"],
      "0-1": ["one", "1"],
      "0-2": ["two", "2"],
      "1-0": ["5150", "ou812"],
      "1-1": ["hysteria"],
      "1-2": ["for those about to rock we salute you", "for those about to rock"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Three", "Two", "One"],
      "0-1": ["One", "Two", "Three"],
      "0-2": ["Two", "One", "Three"],
      "1-0": ["5150", "1984", "OU812"],
      "1-1": ["Hysteria", "Pyromania", "High 'n' Dry"],
      "1-2": ["For Those About to Rock", "Back in Black", "The Razors Edge"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 41", desc: "Can you match Van Halen, Def Leppard & AC/DC to their songs, hits, and chart history? Play Quiz 41 on 80sGrid.com!", url: "https://80sgrid.com/quiz41.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Hard Rock Holy Trinity Vol. 2 on 80sGrid.com! Van Halen, Def Leppard & AC/DC \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 41 \u2022 Hard Rock Holy Trinity Vol. 2\nVan Halen, Def Leppard & AC/DC\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Van Halen, Def Leppard & AC/DC \u2014 do you know ALL their hits? Quiz 41 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Hard Rock Holy Trinity Vol. 2 on 80sGrid.com \ud83c\udfb8 Van Halen, Def Leppard & AC/DC. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz41.html" }
  },

  /* ─── Quiz 42: Prog, AOR & Down Under Cool Vol. 2 ─── */
  {
    n: 42, f: "quiz42.html",
    t: "Prog, AOR & Down Under Cool Vol. 2",
    sub: "Rush, Journey & INXS",
    a: ["Rush", "Journey", "INXS"],
    r: ["1980's Lead Singer", "1980's Lead Guitar", "1980's Drummer"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["geddy lee"],
      "0-1": ["steve perry", "greg rolie"],
      "0-2": ["michael hutchence"],
      "1-0": ["alex lifeson"],
      "1-1": ["neal schon"],
      "1-2": ["tim farriss"],
      "2-0": ["neil peart"],
      "2-1": ["steve smith"],
      "2-2": ["jon farriss"]
    },
    mc: {
      "0-0": ["Geddy Lee", "Alex Lifeson", "Neil Peart"],
      "0-1": ["Steve Perry", "Neal Schon", "Jonathan Cain"],
      "0-2": ["Michael Hutchence", "Andrew Farriss", "Tim Farriss"],
      "1-0": ["Alex Lifeson", "Geddy Lee", "Neil Peart"],
      "1-1": ["Neal Schon", "Jonathan Cain", "Steve Perry"],
      "1-2": ["Tim Farriss", "Kirk Pengilly", "Andrew Farriss"],
      "2-0": ["Neil Peart", "Geddy Lee", "Alex Lifeson"],
      "2-1": ["Steve Smith", "Aynsley Dunbar", "Deen Castronovo"],
      "2-2": ["Jon Farriss", "Andrew Farriss", "Tim Farriss"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 42", desc: "Name the classic 80s lineups of Rush, Journey, and INXS", url: "https://80sgrid.com/quiz42.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Prog, AOR & Down Under Cool Vol. 2 on 80sGrid.com! Rush, Journey & INXS \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 42 \u2022 Prog, AOR & Down Under Cool Vol. 2\nRush, Journey & INXS\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Rush, Journey & INXS \u2014 do you know ALL their hits? Quiz 42 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Prog, AOR & Down Under Cool Vol. 2 on 80sGrid.com \ud83c\udfb8 Rush, Journey & INXS. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz42.html" }
  },

  /* ─── Quiz 43: The Year Everyone Had a Number One Vol. 2 ─── */
  {
    n: 43, f: "quiz43.html",
    t: "The Year Everyone Had a Number One Vol. 2",
    sub: "U2, Michael Jackson & Huey Lewis and the News",
    a: ["U2", "Michael Jackson", "Huey Lewis and the News"],
    r: ["1980s Album with One Word Title", "Played at 1985 Live Aid Concert (Yes or No)", "#1 US Single in the 1980s (Yes or No)"],
    d: "easy",
    yn: ["1-0", "1-1", "1-2", "2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["boy", "war", "october"],
      "0-1": ["thriller", "bad"],
      "0-2": ["sports", "fore", "fore!"],
      "1-0": ["yes"],
      "1-1": ["no"],
      "1-2": ["no"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["War", "Boy", "October"],
      "0-1": ["Thriller", "Bad", "Dangerous"],
      "0-2": ["Sports", "Fore!", "Picture This"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 43", desc: "Match U2, Michael Jackson, and Huey Lewis to albums, Live Aid, and chart history", url: "https://80sgrid.com/quiz43.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played The Year Everyone Had a Number One Vol. 2 on 80sGrid.com! U2, Michael Jackson & Huey Lewis and the News \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 43 \u2022 The Year Everyone Had a Number One Vol. 2\nU2, Michael Jackson & Huey Lewis and the News\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "U2, Michael Jackson & Huey Lewis and the News \u2014 do you know ALL their hits? Quiz 43 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played The Year Everyone Had a Number One Vol. 2 on 80sGrid.com \ud83c\udfb8 U2, Michael Jackson & Huey Lewis and the News. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz43.html" }
  },

  /* ─── Quiz 44: Rock, Piano & Rocket Man Vol. 2 ─── */
  {
    n: 44, f: "quiz44.html",
    t: "Rock, Piano & Rocket Man Vol. 2",
    sub: "Pat Benatar, Billy Joel & Elton John",
    a: ["Pat Benatar", "Billy Joel", "Elton John"],
    r: ["Video on First Day of MTV (Yes or No)", "#1 1980s US Single incl. collabs (Yes or No)", "#1 1980s US Album (Yes or No)"],
    d: "easy",
    yn: ["0-0", "0-1", "0-2", "1-0", "1-1", "1-2", "2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["yes"],
      "0-1": ["no"],
      "0-2": ["no"],
      "1-0": ["no"],
      "1-1": ["yes"],
      "1-2": ["yes"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["no"]
    },
    mc: {},
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 44", desc: "Yes or No for Pat Benatar, Billy Joel, and Elton John on MTV, singles, and albums", url: "https://80sgrid.com/quiz44.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Rock, Piano & Rocket Man Vol. 2 on 80sGrid.com! Pat Benatar, Billy Joel & Elton John \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 44 \u2022 Rock, Piano & Rocket Man Vol. 2\nPat Benatar, Billy Joel & Elton John\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Pat Benatar, Billy Joel & Elton John \u2014 do you know ALL their hits? Quiz 44 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Rock, Piano & Rocket Man Vol. 2 on 80sGrid.com \ud83c\udfb8 Pat Benatar, Billy Joel & Elton John. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz44.html" }
  },

  /* ─── Quiz 45: Pure Pop Royalty ─── */
  {
    n: 45, f: "quiz45.html",
    t: "Pure Pop Royalty",
    sub: "Cyndi Lauper, Madonna & Whitney Houston",
    a: ["Cyndi Lauper", "Madonna", "Whitney Houston"],
    r: ["Home State", "Power Ballad", "Grammy Winner?"],
    d: "easy",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["new york", "ny", "new york city", "nyc", "queens"],
      "0-1": ["michigan", "mi", "bay city", "bay city michigan"],
      "0-2": ["new jersey", "nj", "newark", "newark new jersey"],
      "1-0": ["time after time"],
      "1-1": ["papa dont preach", "papa don't preach"],
      "1-2": ["i will always love you", "i will always love you"],
      "2-0": ["yes"],
      "2-1": ["no"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["New York", "Pennsylvania", "Connecticut"],
      "0-1": ["Michigan", "New York", "Ohio"],
      "0-2": ["New Jersey", "Georgia", "Tennessee"],
      "1-0": ["Time After Time", "Girls Just Want to Have Fun", "She Bop"],
      "1-1": ["Papa Don't Preach", "Like a Virgin", "Material Girl"],
      "1-2": ["I Will Always Love You", "Greatest Love of All", "Saving All My Love"],
      "2-0": ["Yes", "No"],
      "2-1": ["Yes", "No"],
      "2-2": ["Yes", "No"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 12", desc: "Can you match The English Beat, General Public, and Fine Young Cannibals to their hits, covers, and debut albums?", url: "https://80sgrid.com/quiz12.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Pure Pop Royalty on 80sGrid.com! Cyndi Lauper, Madonna & Whitney Houston \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 45 \u2022 Pure Pop Royalty\nCyndi Lauper, Madonna & Whitney Houston\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Cyndi Lauper, Madonna & Whitney Houston \u2014 do you know ALL their hits? Quiz 45 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Pure Pop Royalty on 80sGrid.com \ud83c\udfb8 Cyndi Lauper, Madonna & Whitney Houston. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz12.html" }
  },

  /* ─── Quiz 46: The Voices Behind the Bands Vol. 2 ─── */
  {
    n: 46, f: "quiz46.html",
    t: "The Voices Behind the Bands Vol. 2",
    sub: "Dennis DeYoung, Phil Collins & Lou Gramm",
    a: ["Dennis DeYoung", "Phil Collins", "Lou Gramm"],
    r: ["Band", "Highest Charting U.S. Solo Hit", "Top 25 US Album as solo artist (Yes or No)"],
    d: "medium",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["styx"],
      "0-1": ["genesis"],
      "0-2": ["foreigner"],
      "1-0": ["desert moon"],
      "1-1": ["against all odds", "sussudio", "one more night", "separate lives", "two hearts", "a groovy kind of love", "a groovy kinda love", "another day in paradise"],
      "1-2": ["midnight blue"],
      "2-0": ["yes"],
      "2-1": ["yes"],
      "2-2": ["yes"]
    },
    mc: {
      "0-0": ["Styx", "REO Speedwagon", "Kansas"],
      "0-1": ["Genesis", "Brand X", "Flaming Youth"],
      "0-2": ["Foreigner", "Black Sheep", "Shadow King"],
      "1-0": ["Desert Moon", "Call Me", "Don't Wait for Heroes"],
      "1-1": ["Against All Odds", "Sussudio", "One More Night"],
      "1-2": ["Midnight Blue", "Just Between You and Me", "True Blue Love"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 46", desc: "Match Dennis DeYoung, Phil Collins, and Lou Gramm to bands, solo hits, and album success", url: "https://80sgrid.com/quiz46.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played The Voices Behind the Bands Vol. 2 on 80sGrid.com! Dennis DeYoung, Phil Collins & Lou Gramm \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 46 \u2022 The Voices Behind the Bands Vol. 2\nDennis DeYoung, Phil Collins & Lou Gramm\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Dennis DeYoung, Phil Collins & Lou Gramm \u2014 do you know ALL their hits? Quiz 46 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played The Voices Behind the Bands Vol. 2 on 80sGrid.com \ud83c\udfb8 Dennis DeYoung, Phil Collins & Lou Gramm. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz46.html" }
  },

  /* ─── Quiz 47: Reggae Royalty ─── */
  {
    n: 47, f: "quiz47.html",
    t: "Reggae Royalty",
    sub: "Bob Marley, Third World & Musical Youth",
    a: ["Bob Marley", "Third World", "Musical Youth"],
    r: ["Biggest Hit Song", "Home Country", "Still Together Today? (Yes/No)"],
    d: "easy",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["no woman no cry", "redemption song", "one love", "three little birds", "buffalo soldier", "could you be loved", "jamming"],
      "0-1": ["now that we found love", "try jah love", "sense of purpose"],
      "0-2": ["pass the dutchie"],
      "1-0": ["jamaica", "jamaican"],
      "1-1": ["jamaica", "jamaican"],
      "1-2": ["england", "uk", "united kingdom", "britain", "birmingham"],
      "2-0": ["no"],
      "2-1": ["yes"],
      "2-2": ["no"]
    },
    mc: {
      "0-0": ["No Woman No Cry", "Electric Avenue", "Red Red Wine"],
      "0-1": ["Now That We Found Love", "Red Red Wine", "Pass the Dutchie"],
      "0-2": ["Pass the Dutchie", "No Woman No Cry", "Electric Avenue"],
      "1-0": ["Jamaica", "England", "Trinidad"],
      "1-1": ["Jamaica", "England", "Trinidad"],
      "1-2": ["England", "Jamaica", "USA"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 47", desc: "Can you match Bob Marley, Third World & Musical Youth to their songs, hits, and chart history? Play Quiz 47 on 80sGrid.com!", url: "https://80sgrid.com/quiz47.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Reggae Royalty on 80sGrid.com! Bob Marley, Third World & Musical Youth \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 47 \u2022 Reggae Royalty\nBob Marley, Third World & Musical Youth\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Bob Marley, Third World & Musical Youth \u2014 do you know ALL their hits? Quiz 47 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Reggae Royalty on 80sGrid.com \ud83c\udfb8 Bob Marley, Third World & Musical Youth. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz47.html" }
  },

  /* ─── Quiz 48: Gothic Beauty ─── */
  {
    n: 48, f: "quiz48.html",
    t: "Gothic Beauty",
    sub: "Bauhaus, Peter Murphy & Gene Loves Jezebel",
    a: ["Bauhaus", "Peter Murphy", "Gene Loves Jezebel"],
    r: ["Biggest Hit Song", "Home Country", "Lead Singer's Name"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["bela lugosis dead", "bela lugosi is dead", "shes in parties", "kick in the eye"],
      "0-1": ["cuts you up", "all night long", "deep ocean vast sea"],
      "0-2": ["heartache", "desire", "the motion of love"],
      "1-0": ["england", "uk", "united kingdom", "britain", "northampton"],
      "1-1": ["england", "uk", "united kingdom", "britain"],
      "1-2": ["wales", "uk", "united kingdom", "britain", "swansea"],
      "2-0": ["peter murphy"],
      "2-1": ["peter murphy"],
      "2-2": ["jay aston", "michael aston", "jay", "michael"]
    },
    mc: {
      "0-0": ["Bela Lugosi's Dead", "She's in Parties", "Kick in the Eye"],
      "0-1": ["Cuts You Up", "All Night Long", "Deep Ocean Vast Sea"],
      "0-2": ["Heartache", "Desire", "The Motion of Love"],
      "1-0": ["England", "USA", "Ireland"],
      "1-1": ["England", "USA", "Germany"],
      "1-2": ["Wales", "England", "USA"],
      "2-0": ["Peter Murphy", "Robert Smith", "Ian Curtis"],
      "2-1": ["Peter Murphy", "Gary Numan", "Dave Gahan"],
      "2-2": ["Jay Aston", "Andrew Eldritch", "Simon Le Bon"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 48", desc: "Can you match Bauhaus, Peter Murphy & Gene Loves Jezebel to their songs, hits, and chart history? Play Quiz 48 on 80sGrid.com!", url: "https://80sgrid.com/quiz48.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Gothic Beauty on 80sGrid.com! Bauhaus, Peter Murphy & Gene Loves Jezebel \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 48 \u2022 Gothic Beauty\nBauhaus, Peter Murphy & Gene Loves Jezebel\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Bauhaus, Peter Murphy & Gene Loves Jezebel \u2014 do you know ALL their hits? Quiz 48 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Gothic Beauty on 80sGrid.com \ud83c\udfb8 Bauhaus, Peter Murphy & Gene Loves Jezebel. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz48.html" }
  },

  /* ─── Quiz 49: Voices Don't Get Better Than This ─── */
  {
    n: 49, f: "quiz49.html",
    t: "Voices Don't Get Better Than This",
    sub: "Whitney Houston, Marvin Gaye & Enya",
    a: ["Whitney Houston", "Marvin Gaye", "Enya"],
    r: ["Biggest Hit Song", "Country of Origin", "Decade of Peak Fame"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["i will always love you", "greatest love of all", "i wanna dance with somebody", "saving all my love for you"],
      "0-1": ["sexual healing", "lets get it on", "what going on", "mercy mercy me", "heard it through the grapevine"],
      "0-2": ["orinoco flow", "only time", "sail away", "may it be"],
      "1-0": ["usa", "united states", "america", "new jersey"],
      "1-1": ["usa", "united states", "america"],
      "1-2": ["ireland", "irish"],
      "2-0": ["1980s", "80s"],
      "2-1": ["1960s", "60s"],
      "2-2": ["1980s", "80s"]
    },
    mc: {
      "0-0": ["I Will Always Love You", "Greatest Love of All", "I Wanna Dance with Somebody"],
      "0-1": ["Sexual Healing", "Let's Get It On", "Heard It Through the Grapevine"],
      "0-2": ["Orinoco Flow", "Only Time", "May It Be"],
      "1-0": ["USA", "UK", "Canada"],
      "1-1": ["USA", "UK", "Jamaica"],
      "1-2": ["Ireland", "Scotland", "England"],
      "2-0": ["1980s", "1970s", "1990s"],
      "2-1": ["1960s", "1970s", "1980s"],
      "2-2": ["1980s", "1970s", "1990s"]
    },
    og: { title: "Len's 80sGrid.com \u2014 Quiz 49: Voices Don't Get Better Than This", desc: "Can you match Whitney Houston, Marvin Gaye & Enya to their songs, hits, and chart history? Play Quiz 49 on 80sGrid.com!", url: "https://80sgrid.com/quiz49.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Voices Don't Get Better Than This on 80sGrid.com! Whitney Houston, Marvin Gaye & Enya \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 49 \u2022 Voices Don't Get Better Than This\nWhitney Houston, Marvin Gaye & Enya\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Whitney Houston, Marvin Gaye & Enya \u2014 do you know ALL their hits? Quiz 49 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Voices Don't Get Better Than This on 80sGrid.com \ud83c\udfb8 Whitney Houston, Marvin Gaye & Enya. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz49.html" }
  },

  /* ─── Quiz 50: Female-Fronted Rock Power ─── */
  {
    n: 50, f: "quiz50.html",
    t: "Female-Fronted Rock Power",
    sub: "Pat Benatar, Heart & Romeo Void",
    a: ["Pat Benatar", "Heart", "Romeo Void"],
    r: ["Biggest Hit Song", "Home State or Country", "Had a US #1 Hit? (Yes or No)"],
    d: "easy",
    yn: ["2-0", "2-1", "2-2"],
    ans: {
      "0-0": ["hit me with your best shot", "love is a battlefield", "we belong", "heartbreaker"],
      "0-1": ["alone", "these dreams", "barracuda", "what about love", "never"],
      "0-2": ["never say never", "a girl in trouble"],
      "1-0": ["new york", "ny", "usa", "united states"],
      "1-1": ["washington", "seattle", "usa", "united states"],
      "1-2": ["california", "san francisco", "ca", "usa"],
      "2-0": ["no"],
      "2-1": ["yes"],
      "2-2": ["no"]
    },
    mc: {
      "0-0": ["Hit Me with Your Best Shot", "Love is a Battlefield", "We Belong"],
      "0-1": ["Alone", "Barracuda", "These Dreams"],
      "0-2": ["Never Say Never", "A Girl in Trouble", "Wrap It Up"],
      "1-0": ["New York", "California", "Texas"],
      "1-1": ["Washington", "California", "New York"],
      "1-2": ["California", "New York", "England"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 50", desc: "Can you match Pat Benatar, Heart & Romeo Void to their songs, hits, and chart history? Play Quiz 50 on 80sGrid.com!", url: "https://80sgrid.com/quiz50.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Female-Fronted Rock Power on 80sGrid.com! Pat Benatar, Heart & Romeo Void \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 50 \u2022 Female-Fronted Rock Power\nPat Benatar, Heart & Romeo Void\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Pat Benatar, Heart & Romeo Void \u2014 do you know ALL their hits? Quiz 50 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Female-Fronted Rock Power on 80sGrid.com \ud83c\udfb8 Pat Benatar, Heart & Romeo Void. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz50.html" }
  },

  /* ─── Quiz 51: Pure Pop Perfection ─── */
  {
    n: 51, f: "quiz51.html",
    t: "Pure Pop Perfection",
    sub: "Rick Astley, Debbie Gibson & ABC",
    a: ["Rick Astley", "Debbie Gibson", "ABC"],
    r: ["Biggest Hit Song", "Home Country", "Year of Biggest Hit"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["never gonna give you up", "together forever", "she wants to dance with me"],
      "0-1": ["foolish beat", "only in my dreams", "lost in your eyes", "electric youth"],
      "0-2": ["the look of love", "poison arrow", "all of my heart"],
      "1-0": ["england", "uk", "united kingdom", "britain", "newton-le-willows"],
      "1-1": ["usa", "united states", "america", "new york", "long island"],
      "1-2": ["england", "uk", "united kingdom", "sheffield"],
      "2-0": ["1987"],
      "2-1": ["1988", "1987"],
      "2-2": ["1982"]
    },
    mc: {
      "0-0": ["Never Gonna Give You Up", "Together Forever", "She Wants to Dance with Me"],
      "0-1": ["Foolish Beat", "Only in My Dreams", "Lost in Your Eyes"],
      "0-2": ["The Look of Love", "Poison Arrow", "All of My Heart"],
      "1-0": ["England", "USA", "Australia"],
      "1-1": ["USA", "England", "Canada"],
      "1-2": ["England", "USA", "Ireland"],
      "2-0": ["1987", "1985", "1989"],
      "2-1": ["1988", "1986", "1990"],
      "2-2": ["1982", "1984", "1986"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 51", desc: "Can you match Rick Astley, Debbie Gibson & ABC to their songs, hits, and chart history? Play Quiz 51 on 80sGrid.com!", url: "https://80sgrid.com/quiz51.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Pure Pop Perfection on 80sGrid.com! Rick Astley, Debbie Gibson & ABC \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 51 \u2022 Pure Pop Perfection\nRick Astley, Debbie Gibson & ABC\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Rick Astley, Debbie Gibson & ABC \u2014 do you know ALL their hits? Quiz 51 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Pure Pop Perfection on 80sGrid.com \ud83c\udfb8 Rick Astley, Debbie Gibson & ABC. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz51.html" }
  },

  /* ─── Quiz 52: Power Women of New Wave ─── */
  {
    n: 52, f: "quiz52.html",
    t: "Power Women of New Wave",
    sub: "Swing Out Sister, Till Tuesday & Scandal",
    a: ["Swing Out Sister", "Till Tuesday", "Scandal"],
    r: ["Biggest Hit Song", "Lead Singer's Name", "Home City or Country"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["breakout", "you on my mind", "surrender your love"],
      "0-1": ["voices carry", "coming up close"],
      "0-2": ["the warrior", "goodbye to you", "beat of a heart"],
      "1-0": ["corinne drewery", "corinne"],
      "1-1": ["aimee mann", "aimee"],
      "1-2": ["patty smyth", "patty"],
      "2-0": ["manchester", "england", "uk"],
      "2-1": ["boston", "usa", "united states"],
      "2-2": ["new york", "usa", "united states"]
    },
    mc: {
      "0-0": ["Breakout", "You on My Mind", "Surrender Your Love"],
      "0-1": ["Voices Carry", "Coming Up Close", "What About Love"],
      "0-2": ["The Warrior", "Goodbye to You", "Beat of a Heart"],
      "1-0": ["Corinne Drewery", "Sade", "Alison Moyet"],
      "1-1": ["Aimee Mann", "Cyndi Lauper", "Debbie Harry"],
      "1-2": ["Patty Smyth", "Pat Benatar", "Joan Jett"],
      "2-0": ["Manchester", "London", "Birmingham"],
      "2-1": ["Boston", "New York", "Los Angeles"],
      "2-2": ["New York", "Los Angeles", "Chicago"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 52", desc: "Can you match Swing Out Sister, Till Tuesday & Scandal to their songs, hits, and chart history? Play Quiz 52 on 80sGrid.com!", url: "https://80sgrid.com/quiz52.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Power Women of New Wave on 80sGrid.com! Swing Out Sister, Till Tuesday & Scandal \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 52 \u2022 Power Women of New Wave\nSwing Out Sister, Till Tuesday & Scandal\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Swing Out Sister, Till Tuesday & Scandal \u2014 do you know ALL their hits? Quiz 52 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Power Women of New Wave on 80sGrid.com \ud83c\udfb8 Swing Out Sister, Till Tuesday & Scandal. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz52.html" }
  },

  /* ─── Quiz 53: The Bands Your Friends Thought Were Weird ─── */
  {
    n: 53, f: "quiz53.html",
    t: "The Bands Your Friends Thought Were Weird",
    sub: "Modern English, Flock of Seagulls & Missing Persons",
    a: ["Modern English", "Flock of Seagulls", "Missing Persons"],
    r: ["Biggest Hit Song", "Home Country", "Lead Singer's Name"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["i melt with you", "melt with you"],
      "0-1": ["i ran", "i ran so far away", "space age love song", "wishing"],
      "0-2": ["words", "destination unknown", "walking in la", "walking in los angeles"],
      "1-0": ["england", "uk", "united kingdom", "colchester"],
      "1-1": ["england", "uk", "united kingdom", "liverpool"],
      "1-2": ["usa", "united states", "america", "los angeles"],
      "2-0": ["robbie grey", "robbie"],
      "2-1": ["mike score", "mike"],
      "2-2": ["dale bozzio", "dale"]
    },
    mc: {
      "0-0": ["I Melt with You", "Stop the World", "Ink & Paper"],
      "0-1": ["I Ran", "Space Age Love Song", "Wishing"],
      "0-2": ["Words", "Destination Unknown", "Walking in L.A."],
      "1-0": ["England", "USA", "Ireland"],
      "1-1": ["England", "USA", "Australia"],
      "1-2": ["USA", "England", "Canada"],
      "2-0": ["Robbie Grey", "Martin Gore", "Nik Kershaw"],
      "2-1": ["Mike Score", "Andy Score", "Ali Score"],
      "2-2": ["Dale Bozzio", "Terri Nunn", "Martha Davis"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 53", desc: "Can you match Modern English, Flock of Seagulls & Missing Persons to their songs, hits, and chart history? Play Quiz 53 on 80sGrid.com!", url: "https://80sgrid.com/quiz53.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played The Bands Your Friends Thought Were Weird on 80sGrid.com! Modern English, Flock of Seagulls & Missing Persons \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 53 \u2022 The Bands Your Friends Thought Were Weird\nModern English, Flock of Seagulls & Missing Persons\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Modern English, Flock of Seagulls & Missing Persons \u2014 do you know ALL their hits? Quiz 53 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played The Bands Your Friends Thought Were Weird on 80sGrid.com \ud83c\udfb8 Modern English, Flock of Seagulls & Missing Persons. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz53.html" }
  },

  /* ─── Quiz 54: Cult Classics You Won't Admit You Know ─── */
  {
    n: 54, f: "quiz54.html",
    t: "Cult Classics You Won't Admit You Know",
    sub: "Dominatrix, Romeo Void & Modern English",
    a: ["Dominatrix", "Romeo Void", "Modern English"],
    r: ["Biggest Hit Song", "Home City", "Year of Biggest Hit"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["the dominatrix sleeps tonight", "dominatrix sleeps tonight"],
      "0-1": ["never say never", "a girl in trouble"],
      "0-2": ["i melt with you", "melt with you"],
      "1-0": ["new york", "nyc", "usa"],
      "1-1": ["san francisco", "sf", "california", "usa"],
      "1-2": ["colchester", "england", "uk"],
      "2-0": ["1984"],
      "2-1": ["1984", "1982"],
      "2-2": ["1982"]
    },
    mc: {
      "0-0": ["The Dominatrix Sleeps Tonight", "We Are Family", "Blue Monday"],
      "0-1": ["Never Say Never", "A Girl in Trouble", "Wrap It Up"],
      "0-2": ["I Melt with You", "Stop the World", "Ink & Paper"],
      "1-0": ["New York", "Los Angeles", "Chicago"],
      "1-1": ["San Francisco", "New York", "Los Angeles"],
      "1-2": ["Colchester", "London", "Manchester"],
      "2-0": ["1984", "1981", "1987"],
      "2-1": ["1984", "1982", "1986"],
      "2-2": ["1982", "1985", "1988"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 54", desc: "Can you match Dominatrix, Romeo Void & Modern English to their songs, hits, and chart history? Play Quiz 54 on 80sGrid.com!", url: "https://80sgrid.com/quiz54.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Cult Classics You Won't Admit You Know on 80sGrid.com! Dominatrix, Romeo Void & Modern English \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 54 \u2022 Cult Classics You Won't Admit You Know\nDominatrix, Romeo Void & Modern English\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Dominatrix, Romeo Void & Modern English \u2014 do you know ALL their hits? Quiz 54 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Cult Classics You Won't Admit You Know on 80sGrid.com \ud83c\udfb8 Dominatrix, Romeo Void & Modern English. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz54.html" }
  },

  /* ─── Quiz 55: All-British AOR ─── */
  {
    n: 55, f: "quiz55.html",
    t: "All-British AOR",
    sub: "Steve Winwood, Asia & Supertramp",
    a: ["Steve Winwood", "Asia", "Supertramp"],
    r: ["Biggest Hit Song", "Home Country", "Year of Biggest 80s Hit"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["higher love", "back in the high life again", "valerie", "while you see a chance"],
      "0-1": ["heat of the moment", "only time will tell", "dont cry"],
      "0-2": ["the logical song", "breakfast in america", "dreamer", "give a little bit", "its raining again"],
      "1-0": ["england", "uk", "united kingdom"],
      "1-1": ["england", "uk", "united kingdom"],
      "1-2": ["england", "uk", "united kingdom"],
      "2-0": ["1986"],
      "2-1": ["1982"],
      "2-2": ["1979", "1985"]
    },
    mc: {
      "0-0": ["Higher Love", "Back in the High Life Again", "Valerie"],
      "0-1": ["Heat of the Moment", "Only Time Will Tell", "Don't Cry"],
      "0-2": ["The Logical Song", "Breakfast in America", "Dreamer"],
      "1-0": ["England", "USA", "Ireland"],
      "1-1": ["England", "USA", "Australia"],
      "1-2": ["England", "USA", "Canada"],
      "2-0": ["1986", "1981", "1988"],
      "2-1": ["1982", "1984", "1986"],
      "2-2": ["1979", "1982", "1985"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 55", desc: "Can you match Steve Winwood, Asia & Supertramp to their songs, hits, and chart history? Play Quiz 55 on 80sGrid.com!", url: "https://80sgrid.com/quiz55.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played All-British AOR on 80sGrid.com! Steve Winwood, Asia & Supertramp \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 55 \u2022 All-British AOR\nSteve Winwood, Asia & Supertramp\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Steve Winwood, Asia & Supertramp \u2014 do you know ALL their hits? Quiz 55 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played All-British AOR on 80sGrid.com \ud83c\udfb8 Steve Winwood, Asia & Supertramp. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz55.html" }
  },

  /* ─── Quiz 56: 80s Megastars Up Close ─── */
  {
    n: 56, f: "quiz56.html",
    t: "80s Megastars Up Close",
    sub: "Hall &amp; Oates, Phil Collins & Stevie Nicks",
    a: ["Hall &amp; Oates", "Phil Collins", "Stevie Nicks"],
    r: ["Biggest Hit Song", "Home Country", "Famous Instrument Besides Voice"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["maneater", "out of touch", "i cant go for that", "sara smile", "you make my dreams"],
      "0-1": ["sussudio", "in the air tonight", "one more night", "another day in paradise", "invisible touch"],
      "0-2": ["edge of seventeen", "stand back", "talk to me", "leather and lace", "stop draggin my heart around"],
      "1-0": ["usa", "united states", "philadelphia", "pennsylvania"],
      "1-1": ["england", "uk", "united kingdom"],
      "1-2": ["usa", "united states", "arizona", "california"],
      "2-0": ["guitar", "keyboards", "keys"],
      "2-1": ["drums", "drum kit"],
      "2-2": ["tambourine"]
    },
    mc: {
      "0-0": ["Maneater", "Out of Touch", "I Can't Go for That"],
      "0-1": ["Sussudio", "In the Air Tonight", "One More Night"],
      "0-2": ["Edge of Seventeen", "Stand Back", "Talk to Me"],
      "1-0": ["USA", "UK", "Canada"],
      "1-1": ["England", "USA", "Ireland"],
      "1-2": ["USA", "England", "Australia"],
      "2-0": ["Guitar", "Saxophone", "Tambourine"],
      "2-1": ["Drums", "Piano", "Guitar"],
      "2-2": ["Tambourine", "Guitar", "Piano"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 56", desc: "Can you match Hall & Oates, Phil Collins & Stevie Nicks to their songs, hits, and chart history? Play Quiz 56 on 80sGrid.com!", url: "https://80sgrid.com/quiz56.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played 80s Megastars Up Close on 80sGrid.com! Hall &amp; Oates, Phil Collins & Stevie Nicks \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 56 \u2022 80s Megastars Up Close\nHall &amp; Oates, Phil Collins & Stevie Nicks\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Hall &amp; Oates, Phil Collins & Stevie Nicks \u2014 do you know ALL their hits? Quiz 56 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played 80s Megastars Up Close on 80sGrid.com \ud83c\udfb8 Hall &amp; Oates, Phil Collins & Stevie Nicks. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz56.html" }
  },

  /* ─── Quiz 57: New Wave Oddballs from Three Continents ─── */
  {
    n: 57, f: "quiz57.html",
    t: "New Wave Oddballs from Three Continents",
    sub: "J. Geils Band, Waitresses & Split Enz",
    a: ["J. Geils Band", "Waitresses", "Split Enz"],
    r: ["Biggest Hit Song", "Home Country", "Lead Singer's Name"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["centerfold", "freeze frame", "love stinks"],
      "0-1": ["i know what boys like", "christmas wrapping", "wasnt tomorrow wonderful"],
      "0-2": ["i got you", "poor boy", "history never repeats", "six months in a leaky boat"],
      "1-0": ["usa", "united states", "boston", "massachusetts"],
      "1-1": ["usa", "united states", "cleveland", "ohio"],
      "1-2": ["new zealand", "nz"],
      "2-0": ["peter wolf", "peter"],
      "2-1": ["patty donahue", "patty"],
      "2-2": ["tim finn", "neil finn", "tim", "neil"]
    },
    mc: {
      "0-0": ["Centerfold", "Freeze Frame", "Love Stinks"],
      "0-1": ["I Know What Boys Like", "Christmas Wrapping", "Wasn't Tomorrow Wonderful"],
      "0-2": ["I Got You", "Poor Boy", "History Never Repeats"],
      "1-0": ["USA", "England", "Canada"],
      "1-1": ["USA", "England", "Canada"],
      "1-2": ["New Zealand", "Australia", "England"],
      "2-0": ["Peter Wolf", "Seth Justman", "Magic Dick"],
      "2-1": ["Patty Donahue", "Tracy Thorn", "Chrissie Hynde"],
      "2-2": ["Tim Finn", "Neil Finn", "Phil Judd"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 57", desc: "Can you match J. Geils Band, Waitresses & Split Enz to their songs, hits, and chart history? Play Quiz 57 on 80sGrid.com!", url: "https://80sgrid.com/quiz57.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played New Wave Oddballs from Three Continents on 80sGrid.com! J. Geils Band, Waitresses & Split Enz \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 57 \u2022 New Wave Oddballs from Three Continents\nJ. Geils Band, Waitresses & Split Enz\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "J. Geils Band, Waitresses & Split Enz \u2014 do you know ALL their hits? Quiz 57 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played New Wave Oddballs from Three Continents on 80sGrid.com \ud83c\udfb8 J. Geils Band, Waitresses & Split Enz. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz57.html" }
  },

  /* ─── Quiz 58: Wow, What a Trio We Have Here ─── */
  {
    n: 58, f: "quiz58.html",
    t: "Wow, What a Trio We Have Here",
    sub: "Toto, Kim Wilde & Big Country",
    a: ["Toto", "Kim Wilde", "Big Country"],
    r: ["Song with a Country in the Title", "Where the Band is From", "Year of That Song"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["africa"],
      "0-1": ["cambodia", "kids in america"],
      "0-2": ["in a big country", "big country"],
      "1-0": ["usa", "united states", "los angeles", "california"],
      "1-1": ["england", "uk", "united kingdom"],
      "1-2": ["scotland", "uk", "united kingdom"],
      "2-0": ["1982"],
      "2-1": ["1981"],
      "2-2": ["1983"]
    },
    mc: {
      "0-0": ["Africa", "Rosanna", "Hold the Line"],
      "0-1": ["Cambodia", "Kids in America", "You Keep Me Hangin' On"],
      "0-2": ["In a Big Country", "Wonderland", "Fields of Fire"],
      "1-0": ["USA", "England", "Australia"],
      "1-1": ["England", "USA", "Sweden"],
      "1-2": ["Scotland", "England", "Ireland"],
      "2-0": ["1982", "1984", "1980"],
      "2-1": ["1981", "1983", "1985"],
      "2-2": ["1983", "1981", "1985"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 58", desc: "Can you match Toto, Kim Wilde & Big Country to their songs, hits, and chart history? Play Quiz 58 on 80sGrid.com!", url: "https://80sgrid.com/quiz58.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Wow, What a Trio We Have Here on 80sGrid.com! Toto, Kim Wilde & Big Country \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 58 \u2022 Wow, What a Trio We Have Here\nToto, Kim Wilde & Big Country\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Toto, Kim Wilde & Big Country \u2014 do you know ALL their hits? Quiz 58 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Wow, What a Trio We Have Here on 80sGrid.com \ud83c\udfb8 Toto, Kim Wilde & Big Country. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz58.html" }
  },

  /* ─── Quiz 59: UK Synth-Pop Royalty ─── */
  {
    n: 59, f: "quiz59.html",
    t: "UK Synth-Pop Royalty",
    sub: "Heaven 17, Yazoo & Erasure",
    a: ["Heaven 17", "Yazoo", "Erasure"],
    r: ["Biggest Hit Song", "Home Country", "Lead Singer's Name"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["temptation", "come live with me", "crushed by the mill", "lets all make a bomb"],
      "0-1": ["only you", "dont go", "nobodys diary", "situation"],
      "0-2": ["a little respect", "oh lamour", "sometimes", "ship of fools", "chains of love"],
      "1-0": ["england", "uk", "sheffield"],
      "1-1": ["england", "uk"],
      "1-2": ["england", "uk", "london"],
      "2-0": ["glenn gregory", "glenn"],
      "2-1": ["alison moyet", "alf", "alison"],
      "2-2": ["andy bell", "andy"]
    },
    mc: {
      "0-0": ["Temptation", "Come Live with Me", "Let's All Make a Bomb"],
      "0-1": ["Only You", "Don't Go", "Nobody's Diary"],
      "0-2": ["A Little Respect", "Oh L'Amour", "Sometimes"],
      "1-0": ["England", "USA", "Germany"],
      "1-1": ["England", "USA", "Sweden"],
      "1-2": ["England", "USA", "Ireland"],
      "2-0": ["Glenn Gregory", "Martyn Ware", "Ian Craig Marsh"],
      "2-1": ["Alison Moyet", "Vince Clarke", "Cynthia Manley"],
      "2-2": ["Andy Bell", "Vince Clarke", "Neil Tennant"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 59", desc: "Can you match Heaven 17, Yazoo & Erasure to their songs, hits, and chart history? Play Quiz 59 on 80sGrid.com!", url: "https://80sgrid.com/quiz59.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played UK Synth-Pop Royalty on 80sGrid.com! Heaven 17, Yazoo & Erasure \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 59 \u2022 UK Synth-Pop Royalty\nHeaven 17, Yazoo & Erasure\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Heaven 17, Yazoo & Erasure \u2014 do you know ALL their hits? Quiz 59 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played UK Synth-Pop Royalty on 80sGrid.com \ud83c\udfb8 Heaven 17, Yazoo & Erasure. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz59.html" }
  },

  /* ─── Quiz 60: Post-Punk Sophisticates ─── */
  {
    n: 60, f: "quiz60.html",
    t: "Post-Punk Sophisticates",
    sub: "Talk Talk, Roxy Music & Big Audio Dynamite",
    a: ["Talk Talk", "Roxy Music", "Big Audio Dynamite"],
    r: ["Biggest Hit Song", "Home Country", "Lead Singer's Name"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["its my life", "such a shame", "lifes what you make it", "talk talk"],
      "0-1": ["more than this", "avalon", "love is the drug", "virginia plain", "jealous guy"],
      "0-2": ["e=mc2", "medicine show", "rush", "c mon every beatbox"],
      "1-0": ["england", "uk"],
      "1-1": ["england", "uk"],
      "1-2": ["england", "uk"],
      "2-0": ["mark hollis", "mark"],
      "2-1": ["bryan ferry", "bryan"],
      "2-2": ["mick jones", "mick"]
    },
    mc: {
      "0-0": ["It's My Life", "Such a Shame", "Life's What You Make It"],
      "0-1": ["More Than This", "Avalon", "Love is the Drug"],
      "0-2": ["E=MC2", "Medicine Show", "Rush"],
      "1-0": ["England", "USA", "Ireland"],
      "1-1": ["England", "USA", "Germany"],
      "1-2": ["England", "USA", "Australia"],
      "2-0": ["Mark Hollis", "Lee Harris", "Paul Webb"],
      "2-1": ["Bryan Ferry", "Phil Manzanera", "Andy Mackay"],
      "2-2": ["Mick Jones", "Don Letts", "Greg Roberts"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 60", desc: "Can you match Talk Talk, Roxy Music & Big Audio Dynamite to their songs, hits, and chart history? Play Quiz 60 on 80sGrid.com!", url: "https://80sgrid.com/quiz60.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Post-Punk Sophisticates on 80sGrid.com! Talk Talk, Roxy Music & Big Audio Dynamite \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 60 \u2022 Post-Punk Sophisticates\nTalk Talk, Roxy Music & Big Audio Dynamite\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Talk Talk, Roxy Music & Big Audio Dynamite \u2014 do you know ALL their hits? Quiz 60 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Post-Punk Sophisticates on 80sGrid.com \ud83c\udfb8 Talk Talk, Roxy Music & Big Audio Dynamite. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz60.html" }
  },

  /* ─── Quiz 61: Eclectic Trio of New Romanticism ─── */
  {
    n: 61, f: "quiz61.html",
    t: "Eclectic Trio of New Romanticism",
    sub: "Paul Weller, Paul Young & Elvis Costello",
    a: ["Paul Weller", "Paul Young", "Elvis Costello"],
    r: ["Biggest Hit Song", "Home Country", "Year of Biggest 80s Hit"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["going underground", "town called malice", "walls come tumbling down", "shout to the top", "the eton rifles"],
      "0-1": ["everytime you go away", "come back and stay", "wherever i lay my head", "love of the common people"],
      "0-2": ["olivers army", "everyday i write the book", "pump it up", "alison", "accidents will happen"],
      "1-0": ["england", "uk"],
      "1-1": ["england", "uk"],
      "1-2": ["england", "uk"],
      "2-0": ["1982", "1980"],
      "2-1": ["1985"],
      "2-2": ["1979", "1983"]
    },
    mc: {
      "0-0": ["Going Underground", "Town Called Malice", "Walls Come Tumbling Down"],
      "0-1": ["Everytime You Go Away", "Come Back and Stay", "Wherever I Lay My Head"],
      "0-2": ["Oliver's Army", "Everyday I Write the Book", "Pump It Up"],
      "1-0": ["England", "USA", "Ireland"],
      "1-1": ["England", "USA", "Ireland"],
      "1-2": ["England", "USA", "Ireland"],
      "2-0": ["1982", "1979", "1985"],
      "2-1": ["1985", "1983", "1987"],
      "2-2": ["1979", "1977", "1983"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 61", desc: "Can you match Paul Weller, Paul Young & Elvis Costello to their songs, hits, and chart history? Play Quiz 61 on 80sGrid.com!", url: "https://80sgrid.com/quiz61.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Eclectic Trio of New Romanticism on 80sGrid.com! Paul Weller, Paul Young & Elvis Costello \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 61 \u2022 Eclectic Trio of New Romanticism\nPaul Weller, Paul Young & Elvis Costello\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Paul Weller, Paul Young & Elvis Costello \u2014 do you know ALL their hits? Quiz 61 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Eclectic Trio of New Romanticism on 80sGrid.com \ud83c\udfb8 Paul Weller, Paul Young & Elvis Costello. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz61.html" }
  },

  /* ─── Quiz 62: Pop, R&B & Hip-Hop Royalty ─── */
  {
    n: 62, f: "quiz62.html",
    t: "Pop, R&B & Hip-Hop Royalty",
    sub: "George Michael, Janet Jackson & MC Hammer",
    a: ["George Michael", "Janet Jackson", "MC Hammer"],
    r: ["Biggest Hit Song", "Home Country", "Year of Biggest Hit"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["careless whisper", "faith", "father figure", "wake me up before you go go", "one more try"],
      "0-1": ["what have you done for me lately", "nasty", "control", "miss you much", "rhythm nation"],
      "0-2": ["u cant touch this", "too legit to quit", "have you seen her", "pray"],
      "1-0": ["england", "uk", "united kingdom"],
      "1-1": ["usa", "united states", "indiana", "gary"],
      "1-2": ["usa", "united states", "california", "oakland"],
      "2-0": ["1984", "1987"],
      "2-1": ["1986", "1989"],
      "2-2": ["1990"]
    },
    mc: {
      "0-0": ["Careless Whisper", "Faith", "Father Figure"],
      "0-1": ["What Have You Done for Me Lately", "Nasty", "Rhythm Nation"],
      "0-2": ["U Can't Touch This", "Too Legit to Quit", "Pray"],
      "1-0": ["England", "USA", "Australia"],
      "1-1": ["USA", "England", "Canada"],
      "1-2": ["USA", "England", "Jamaica"],
      "2-0": ["1984", "1987", "1990"],
      "2-1": ["1986", "1989", "1991"],
      "2-2": ["1990", "1988", "1992"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 62", desc: "Can you match George Michael, Janet Jackson & MC Hammer to their songs, hits, and chart history? Play Quiz 62 on 80sGrid.com!", url: "https://80sgrid.com/quiz62.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Pop, R&B & Hip-Hop Royalty on 80sGrid.com! George Michael, Janet Jackson & MC Hammer \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 62 \u2022 Pop, R&B & Hip-Hop Royalty\nGeorge Michael, Janet Jackson & MC Hammer\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "George Michael, Janet Jackson & MC Hammer \u2014 do you know ALL their hits? Quiz 62 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Pop, R&B & Hip-Hop Royalty on 80sGrid.com \ud83c\udfb8 George Michael, Janet Jackson & MC Hammer. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz62.html" }
  },

  /* ─── Quiz 63: Imagine The Hair Spray These Bands used! ─── */
  {
    n: 63, f: "quiz63.html",
    t: "Imagine The Hair Spray These Bands used!",
    sub: "B-52s, Devo & Kajagoogoo",
    a: ["B-52s", "Devo", "Kajagoogoo"],
    r: ["Biggest Hit Song", "Home City", "Lead Singer's Name"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["love shack", "rock lobster", "roam", "private idaho"],
      "0-1": ["whip it", "girl u want", "beautiful world", "working in a coal mine"],
      "0-2": ["too shy", "ooh to be ah", "big apple"],
      "1-0": ["athens", "georgia", "usa"],
      "1-1": ["akron", "ohio", "usa"],
      "1-2": ["england", "uk", "leighton buzzard"],
      "2-0": ["fred schneider", "kate pierson", "cindy wilson", "fred", "kate", "cindy"],
      "2-1": ["mark mothersbaugh", "mark"],
      "2-2": ["limahl", "christopher hamill"]
    },
    mc: {
      "0-0": ["Love Shack", "Rock Lobster", "Roam"],
      "0-1": ["Whip It", "Girl U Want", "Beautiful World"],
      "0-2": ["Too Shy", "Ooh to Be Ah", "Big Apple"],
      "1-0": ["Athens", "New York", "Los Angeles"],
      "1-1": ["Akron", "Cleveland", "Detroit"],
      "1-2": ["England", "USA", "Germany"],
      "2-0": ["Fred Schneider", "Kate Pierson", "Cindy Wilson"],
      "2-1": ["Mark Mothersbaugh", "Gerald Casale", "Bob Mothersbaugh"],
      "2-2": ["Limahl", "Nick Beggs", "Stuart Croxford Neale"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 63", desc: "Can you match B-52s, Devo & Kajagoogoo to their songs, hits, and chart history? Play Quiz 63 on 80sGrid.com!", url: "https://80sgrid.com/quiz63.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Imagine The Hair Spray These Bands used! on 80sGrid.com! B-52s, Devo & Kajagoogoo \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 63 \u2022 Imagine The Hair Spray These Bands used!\nB-52s, Devo & Kajagoogoo\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "B-52s, Devo & Kajagoogoo \u2014 do you know ALL their hits? Quiz 63 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Imagine The Hair Spray These Bands used! on 80sGrid.com \ud83c\udfb8 B-52s, Devo & Kajagoogoo. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz63.html" }
  },

  /* ─── Quiz 64: Three Continents, One Era ─── */
  {
    n: 64, f: "quiz64.html",
    t: "Three Continents, One Era",
    sub: "Eurythmics, Midnight Oil & Michael Jackson",
    a: ["Eurythmics", "Midnight Oil", "Michael Jackson"],
    r: ["Biggest Hit Song", "Home Country", "Lead Singer's Name"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["sweet dreams", "here comes the rain again", "would i lie to you", "there must be an angel", "sisters are doin it for themselves"],
      "0-1": ["beds are burning", "the dead heart", "blue sky mine", "read about it"],
      "0-2": ["billie jean", "thriller", "beat it", "man in the mirror", "black or white", "rock with you"],
      "1-0": ["scotland", "england", "uk", "united kingdom"],
      "1-1": ["australia"],
      "1-2": ["usa", "united states"],
      "2-0": ["annie lennox", "annie"],
      "2-1": ["peter garrett", "peter"],
      "2-2": ["michael jackson", "michael"]
    },
    mc: {
      "0-0": ["Sweet Dreams", "Here Comes the Rain Again", "Would I Lie to You"],
      "0-1": ["Beds Are Burning", "The Dead Heart", "Blue Sky Mine"],
      "0-2": ["Billie Jean", "Thriller", "Man in the Mirror"],
      "1-0": ["Scotland/England", "USA", "Australia"],
      "1-1": ["Australia", "New Zealand", "USA"],
      "1-2": ["USA", "England", "Canada"],
      "2-0": ["Annie Lennox", "Dave Stewart", "Clem Burke"],
      "2-1": ["Peter Garrett", "Jim Moginie", "Martin Rotsey"],
      "2-2": ["Michael Jackson", "Jermaine Jackson", "Tito Jackson"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 64", desc: "Can you match Eurythmics, Midnight Oil & Michael Jackson to their songs, hits, and chart history? Play Quiz 64 on 80sGrid.com!", url: "https://80sgrid.com/quiz64.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Three Continents, One Era on 80sGrid.com! Eurythmics, Midnight Oil & Michael Jackson \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 64 \u2022 Three Continents, One Era\nEurythmics, Midnight Oil & Michael Jackson\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Eurythmics, Midnight Oil & Michael Jackson \u2014 do you know ALL their hits? Quiz 64 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Three Continents, One Era on 80sGrid.com \ud83c\udfb8 Eurythmics, Midnight Oil & Michael Jackson. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz64.html" }
  },

  /* ─── Quiz 65: Songs With a Color in the Title ─── */
  {
    n: 65, f: "quiz65.html",
    t: "Songs With a Color in the Title",
    sub: "New Order, Psychedelic Furs & Chris de Burgh",
    a: ["New Order", "Psychedelic Furs", "Chris de Burgh"],
    r: ["Song with a Color in the Title", "Home Country", "Year of That Song"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["blue monday", "true faith", "bizarre love triangle"],
      "0-1": ["pretty in pink", "love my way", "the ghost in you"],
      "0-2": ["lady in red", "dont pay the ferryman", "a spaceman came travelling"],
      "1-0": ["england", "uk", "manchester"],
      "1-1": ["england", "uk"],
      "1-2": ["ireland", "irish", "republic of ireland"],
      "2-0": ["1983"],
      "2-1": ["1981", "1984"],
      "2-2": ["1986"]
    },
    mc: {
      "0-0": ["Blue Monday", "True Faith", "Bizarre Love Triangle"],
      "0-1": ["Pretty in Pink", "Love My Way", "The Ghost in You"],
      "0-2": ["Lady in Red", "Don't Pay the Ferryman", "A Spaceman Came Travelling"],
      "1-0": ["England", "USA", "Ireland"],
      "1-1": ["England", "USA", "Australia"],
      "1-2": ["Ireland", "England", "USA"],
      "2-0": ["1983", "1985", "1987"],
      "2-1": ["1981", "1984", "1986"],
      "2-2": ["1986", "1983", "1989"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 65", desc: "Can you match New Order, Psychedelic Furs & Chris de Burgh to their songs, hits, and chart history? Play Quiz 65 on 80sGrid.com!", url: "https://80sgrid.com/quiz65.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Songs With a Color in the Title on 80sGrid.com! New Order, Psychedelic Furs & Chris de Burgh \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 65 \u2022 Songs With a Color in the Title\nNew Order, Psychedelic Furs & Chris de Burgh\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "New Order, Psychedelic Furs & Chris de Burgh \u2014 do you know ALL their hits? Quiz 65 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Songs With a Color in the Title on 80sGrid.com \ud83c\udfb8 New Order, Psychedelic Furs & Chris de Burgh. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz65.html" }
  },

  /* ─── Quiz 66: Three people would never have coffee together ─── */
  {
    n: 66, f: "quiz66.html",
    t: "Three people would never have coffee together",
    sub: "Prince, Nena & Tommy Tutone",
    a: ["Prince", "Nena", "Tommy Tutone"],
    r: ["Song with a Number in the Title", "Home Country", "The Number in the Title"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["1999"],
      "0-1": ["99 red balloons", "99 luftballons", "99"],
      "0-2": ["867 5309", "867-5309", "867-5309 jenny", "jenny"],
      "1-0": ["usa", "united states", "minnesota", "minneapolis"],
      "1-1": ["germany", "west germany"],
      "1-2": ["usa", "united states"],
      "2-0": ["1999"],
      "2-1": ["99"],
      "2-2": ["867", "867-5309", "8675309"]
    },
    mc: {
      "0-0": ["1999", "Purple Rain", "When Doves Cry"],
      "0-1": ["99 Red Balloons", "Nena", "Irgendwie Irgendwo Irgendwann"],
      "0-2": ["867-5309/Jenny", "Angel Say No", "Which Man Are You"],
      "1-0": ["USA", "England", "Canada"],
      "1-1": ["Germany", "Austria", "Sweden"],
      "1-2": ["USA", "England", "Canada"],
      "2-0": ["1999", "999", "1984"],
      "2-1": ["99", "999", "9"],
      "2-2": ["867-5309", "555-1234", "867"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 66", desc: "Can you match Prince, Nena & Tommy Tutone to their songs, hits, and chart history? Play Quiz 66 on 80sGrid.com!", url: "https://80sgrid.com/quiz66.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Three people would never have coffee together on 80sGrid.com! Prince, Nena & Tommy Tutone \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 66 \u2022 Three people would never have coffee together\nPrince, Nena & Tommy Tutone\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Prince, Nena & Tommy Tutone \u2014 do you know ALL their hits? Quiz 66 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Three people would never have coffee together on 80sGrid.com \ud83c\udfb8 Prince, Nena & Tommy Tutone. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz66.html" }
  },

  /* ─── Quiz 67: MTV Video of the Year Winners ─── */
  {
    n: 67, f: "quiz67.html",
    t: "MTV Video of the Year Winners",
    sub: "A-ha, Peter Gabriel & INXS",
    a: ["A-ha", "Peter Gabriel", "INXS"],
    r: ["Song that Won MTV Video of the Year", "Home Country", "Year They Won"],
    d: "medium",
    yn: [],
    ans: {
      "0-0": ["take on me"],
      "0-1": ["sledgehammer"],
      "0-2": ["need you tonight", "need you tonight mediate"],
      "1-0": ["norway", "norwegian"],
      "1-1": ["england", "uk", "united kingdom"],
      "1-2": ["australia", "australian"],
      "2-0": ["1986"],
      "2-1": ["1987"],
      "2-2": ["1988"]
    },
    mc: {
      "0-0": ["Take On Me", "The Sun Always Shines on TV", "Hunting High and Low"],
      "0-1": ["Sledgehammer", "Big Time", "In Your Eyes"],
      "0-2": ["Need You Tonight", "Never Tear Us Apart", "Devil Inside"],
      "1-0": ["Norway", "Sweden", "Denmark"],
      "1-1": ["England", "USA", "Australia"],
      "1-2": ["Australia", "New Zealand", "England"],
      "2-0": ["1986", "1985", "1987"],
      "2-1": ["1987", "1986", "1988"],
      "2-2": ["1988", "1987", "1989"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 67", desc: "Can you match A-ha, Peter Gabriel & INXS to their songs, hits, and chart history? Play Quiz 67 on 80sGrid.com!", url: "https://80sgrid.com/quiz67.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played MTV Video of the Year Winners on 80sGrid.com! A-ha, Peter Gabriel & INXS \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 67 \u2022 MTV Video of the Year Winners\nA-ha, Peter Gabriel & INXS\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "A-ha, Peter Gabriel & INXS \u2014 do you know ALL their hits? Quiz 67 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played MTV Video of the Year Winners on 80sGrid.com \ud83c\udfb8 A-ha, Peter Gabriel & INXS. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz67.html" }
  },

  /* ─── Quiz 68: Born and Raised in New York ─── */
  {
    n: 68, f: "quiz68.html",
    t: "Born and Raised in New York",
    sub: "Blondie, Cyndi Lauper & Billy Joel",
    a: ["Blondie", "Cyndi Lauper", "Billy Joel"],
    r: ["Biggest Hit Song", "NYC Borough or Area", "Year of Biggest 80s Hit"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["call me", "heart of glass", "rapture", "one way or another"],
      "0-1": ["girls just want to have fun", "time after time", "true colors", "she bop"],
      "0-2": ["piano man", "its still rock and roll to me", "we didnt start the fire", "uptown girl", "tell her about it"],
      "1-0": ["manhattan", "lower east side", "new york", "nyc"],
      "1-1": ["queens", "new york", "nyc"],
      "1-2": ["long island", "hicksville", "new york", "nyc"],
      "2-0": ["1980", "1981"],
      "2-1": ["1983", "1986"],
      "2-2": ["1980", "1983", "1989"]
    },
    mc: {
      "0-0": ["Call Me", "Heart of Glass", "Rapture"],
      "0-1": ["Girls Just Want to Have Fun", "Time After Time", "True Colors"],
      "0-2": ["It's Still Rock and Roll to Me", "We Didn't Start the Fire", "Uptown Girl"],
      "1-0": ["Manhattan", "Queens", "Brooklyn"],
      "1-1": ["Queens", "Manhattan", "Brooklyn"],
      "1-2": ["Long Island", "Brooklyn", "Manhattan"],
      "2-0": ["1980", "1978", "1982"],
      "2-1": ["1983", "1981", "1986"],
      "2-2": ["1980", "1983", "1989"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 68", desc: "Can you match Blondie, Cyndi Lauper & Billy Joel to their songs, hits, and chart history? Play Quiz 68 on 80sGrid.com!", url: "https://80sgrid.com/quiz68.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Born and Raised in New York on 80sGrid.com! Blondie, Cyndi Lauper & Billy Joel \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 68 \u2022 Born and Raised in New York\nBlondie, Cyndi Lauper & Billy Joel\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Blondie, Cyndi Lauper & Billy Joel \u2014 do you know ALL their hits? Quiz 68 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Born and Raised in New York on 80sGrid.com \ud83c\udfb8 Blondie, Cyndi Lauper & Billy Joel. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz68.html" }
  },

  /* ─── Quiz 69: Born in LA ─── */
  {
    n: 69, f: "quiz69.html",
    t: "Born in LA",
    sub: "Van Halen, The Go-Gos & The Bangles",
    a: ["Van Halen", "The Go-Gos", "The Bangles"],
    r: ["Biggest Hit Song", "LA City or Area", "Lead Singer's Name"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["jump", "panama", "hot for teacher", "runnin with the devil", "eruption"],
      "0-1": ["we got the beat", "vacation", "our lips are sealed", "head over heels"],
      "0-2": ["eternal flame", "manic monday", "walk like an egyptian", "in your room"],
      "1-0": ["pasadena", "los angeles", "la"],
      "1-1": ["hollywood", "los angeles", "la"],
      "1-2": ["hollywood", "los angeles", "la"],
      "2-0": ["david lee roth", "sammy hagar", "diamond dave", "david", "sammy"],
      "2-1": ["belinda carlisle", "belinda"],
      "2-2": ["susanna hoffs", "susanna"]
    },
    mc: {
      "0-0": ["Jump", "Panama", "Hot for Teacher"],
      "0-1": ["We Got the Beat", "Vacation", "Our Lips Are Sealed"],
      "0-2": ["Eternal Flame", "Manic Monday", "Walk Like an Egyptian"],
      "1-0": ["Pasadena", "Hollywood", "Burbank"],
      "1-1": ["Hollywood", "Pasadena", "Burbank"],
      "1-2": ["Hollywood", "Pasadena", "Long Beach"],
      "2-0": ["David Lee Roth", "Sammy Hagar", "Eddie Van Halen"],
      "2-1": ["Belinda Carlisle", "Jane Wiedlin", "Charlotte Caffey"],
      "2-2": ["Susanna Hoffs", "Vicki Peterson", "Debbi Peterson"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 69", desc: "Can you match Van Halen, The Go-Gos & The Bangles to their songs, hits, and chart history? Play Quiz 69 on 80sGrid.com!", url: "https://80sgrid.com/quiz69.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played Born in LA on 80sGrid.com! Van Halen, The Go-Gos & The Bangles \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 69 \u2022 Born in LA\nVan Halen, The Go-Gos & The Bangles\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Van Halen, The Go-Gos & The Bangles \u2014 do you know ALL their hits? Quiz 69 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played Born in LA on 80sGrid.com \ud83c\udfb8 Van Halen, The Go-Gos & The Bangles. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz69.html" }
  },

  /* ─── Quiz 70: 80s Legends Who Never Quit ─── */
  {
    n: 70, f: "quiz70.html",
    t: "80s Legends Who Never Quit",
    sub: "Bon Jovi, U2 & Sting",
    a: ["Bon Jovi", "U2", "Sting"],
    r: ["Their Big 80s Hit", "Their Post-1995 Hit", "Home Country"],
    d: "easy",
    yn: [],
    ans: {
      "0-0": ["livin on a prayer", "you give love a bad name", "wanted dead or alive"],
      "0-1": ["with or without you", "where the streets have no name", "i still havent found what im looking for", "one"],
      "0-2": ["every breath you take", "roxanne", "message in a bottle", "dont stand so close to me"],
      "1-0": ["its my life", "always", "thank you for loving me", "have a nice day"],
      "1-1": ["beautiful day", "vertigo", "one", "stuck in a moment you cant get out of"],
      "1-2": ["desert rose", "fields of gold", "if you love somebody set them free", "englishman in new york"],
      "2-0": ["usa", "united states", "new jersey"],
      "2-1": ["ireland", "irish", "republic of ireland", "dublin"],
      "2-2": ["england", "uk", "newcastle"]
    },
    mc: {
      "0-0": ["Livin' on a Prayer", "You Give Love a Bad Name", "Wanted Dead or Alive"],
      "0-1": ["With or Without You", "Where the Streets Have No Name", "I Still Haven't Found What I'm Looking For"],
      "0-2": ["Every Breath You Take", "Roxanne", "Don't Stand So Close to Me"],
      "1-0": ["It's My Life", "Always", "Have a Nice Day"],
      "1-1": ["Beautiful Day", "Vertigo", "Stuck in a Moment"],
      "1-2": ["Desert Rose", "Fields of Gold", "Englishman in New York"],
      "2-0": ["USA", "England", "Ireland"],
      "2-1": ["Ireland", "England", "USA"],
      "2-2": ["England", "USA", "Ireland"]
    },
    og: { title: "Len's 80sGrid.com Music Edition - Quiz 70", desc: "Can you match Bon Jovi, U2 & Sting to their songs, hits, and chart history? Play Quiz 70 on 80sGrid.com!", url: "https://80sgrid.com/quiz70.html", img: "https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/header26.jpg" },
    social: { fb: "I just played 80s Legends Who Never Quit on 80sGrid.com! Bon Jovi, U2 & Sting \u2014 can you beat my score? \ud83c\udfb8 #80sGrid #80sMusic", ig: "Quiz 70 \u2022 80s Legends Who Never Quit\nBon Jovi, U2 & Sting\n\n\ud83c\udfb8 Free daily 80s trivia at 80sGrid.com\n\n#80sGrid #80sMusic #MusicTrivia", tt: "Bon Jovi, U2 & Sting \u2014 do you know ALL their hits? Quiz 70 on 80sGrid.com \ud83c\udfb6 #80sGrid #80sMusic #MusicTrivia", tw: "Just played 80s Legends Who Never Quit on 80sGrid.com \ud83c\udfb8 Bon Jovi, U2 & Sting. Can you beat me? #80sGrid #80sMusic", url: "https://80sgrid.com/quiz70.html" }
  }

];

/* ─────────────────────────────────────────────
   LOOKUP HELPERS
   ───────────────────────────────────────────── */

function getQuizByNum(n)        { return QUIZ_DATA.find(q => q.n === n) || null; }
function getQuizByFile(f)       { return QUIZ_DATA.find(q => q.f === f) || null; }
function getQuizById(id)        { return QUIZ_DATA.find(q => q.f === id + '.html' || q.f === id) || null; }
function getQuizzesByDiff(d)    { return QUIZ_DATA.filter(q => q.d === d); }
function getRandomQuiz(d)       { const pool = d ? getQuizzesByDiff(d) : QUIZ_DATA; return pool[Math.floor(Math.random()*pool.length)]; }

/** Build Wordle-style emoji grid from 9-cell state array.
 *  states: array of 'correct'|'incorrect'|'lifeline'|'empty' */
function buildEmojiGrid(states) {
  const map = { correct:'🟩', incorrect:'🟥', lifeline:'🟨', empty:'⬜' };
  return [0,1,2].map(row =>
    [0,1,2].map(col => map[states[row*3+col]] || '⬜').join('')
  ).join('\n');
}

/** Per-platform share text for a completed quiz.
 *  quiz: QUIZ_DATA entry, score: 0-9, emojiGrid: string from buildEmojiGrid() */
function buildShareText(quiz, score, emojiGrid, platform) {
  switch(platform) {
    case 'facebook':  return quiz.social.fb + '\n\nMy score: ' + score + '/9';
    case 'instagram': return quiz.social.ig + '\n\nMy score: ' + score + '/9\n\n' + emojiGrid;
    case 'tiktok':    return quiz.social.tt;
    case 'twitter':   return quiz.social.tw + '\n\nMy score: ' + score + '/9\n' + emojiGrid;
    default:          return 'Quiz ' + quiz.n + ' · ' + quiz.t + ' — ' + score + '/9\n' + emojiGrid + '\n80sGrid.com';
  }
}

/* NAV LIST — auto-generated, no duplicate maintenance needed */
var ALL_NAV_QUIZZES = QUIZ_DATA.map(q => ({ n: q.n, f: q.f, c: q.d }));
