// High-frequency forms and collocations that learners should actively memorise.
// Each chapter receives a compact reference section after its concept lessons.
const MEMORY_BANK={
  skeleton:[
    {title:'常見不及物動詞（後面不直接接受詞）',intro:'這些動詞可以單獨構成「主詞＋動詞片語」。若要補充地點、時間或相關對象，通常需要介系詞。',columns:['動詞','常見意思','正確搭配'],rows:[['arrive','到達','arrive at the station / arrive in Sydney'],['happen','發生','Something happened. / happen to someone'],['sleep','睡覺','sleep well / sleep for eight hours'],['go','去','go to school / go home'],['come','來','come here / come from China'],['wait','等待','wait for the bus'],['listen','聽','listen to music'],['laugh','笑','laugh at a joke']],note:'不能說 arrive the station、listen music、wait the bus；這些表達需要介系詞。'},
    {title:'三類主要動詞要分清',columns:['類型','後面接什麼','例子'],rows:[['及物動詞 vt.','直接接受詞','She opened the door.'],['不及物動詞 vi.','不直接接受詞','The baby slept.'],['連綴動詞','接主詞補語說明主詞','The soup smells good.']],note:'同一動詞有時可兼用：The door opened（不及物）；She opened the door（及物）。'},
    {title:'容易誤加介系詞的及物動詞',columns:['正確表達','不要說','意思'],rows:[['discuss the problem','discuss about the problem','討論問題'],['enter the room','enter into the room','進入房間'],['reach the station','reach to the station','到達車站'],['answer the question','answer to the question','回答問題'],['marry someone','marry with someone','與某人結婚']]}
  ],
  'be-there-have':[
    {title:'be 動詞現在式',columns:['主詞','be 動詞','例句'],rows:[['I','am','I am ready.'],['he / she / it / 單數名詞','is','She is a student.'],['you / we / they / 複數名詞','are','They are at home.']],note:'本課只學現在式 am、is、are；過去式會在過去簡單式單元介紹。'},
    {title:'there be 現在式',columns:['後接名詞','結構','例句'],rows:[['單數','There is','There is a café nearby.'],['不可數','There is','There is some water.'],['複數','There are','There are two cafés nearby.']],note:'先看 be 後面的名詞，不要用 have 代替 there is / are。'}
  ],
  nouns:[
    {title:'高頻不規則複數',columns:['單數','複數','中文'],rows:[['child','children','孩子'],['person','people','人'],['man / woman','men / women','男人／女人'],['tooth / foot','teeth / feet','牙齒／腳'],['mouse','mice','老鼠'],['sheep','sheep','綿羊'],['fish','fish / fishes','魚／魚的種類']]},
    {title:'常見不可數名詞',columns:['名詞','不要寫','可用表達'],rows:[['advice','an advice / advices','a piece of advice'],['information','informations','some information'],['furniture','furnitures','a piece of furniture'],['homework','homeworks','some homework'],['luggage','luggages','a piece of luggage'],['news','a news','a piece of news'],['bread','breads','a loaf / slice of bread']]}
  ],
  pronouns:[
    {title:'人稱代名詞與所有格總表',columns:['主格','受格','所有格形容詞','所有格代名詞','反身代名詞'],rows:[['I','me','my','mine','myself'],['you','you','your','yours','yourself / yourselves'],['he','him','his','his','himself'],['she','her','her','hers','herself'],['it','it','its','—','itself'],['we','us','our','ours','ourselves'],['they','them','their','theirs','themselves']],note:'my 後必須有名詞：my book；mine 後不能再接名詞：The book is mine。'},
    {title:'常見不定代名詞',columns:['指人','指物','用法'],rows:[['someone / somebody','something','肯定句常用'],['anyone / anybody','anything','疑問、否定或「任何」'],['everyone / everybody','everything','整體概念，動詞片語用單數'],['no one / nobody','nothing','本身已是否定，不再加 not']]}
  ],
  present:[
    {title:'第三人稱單數變化',columns:['規則','例子','結果'],rows:[['一般加 -s','work, read','works, reads'],['s/x/ch/sh/o 後加 -es','watch, go','watches, goes'],['子音字母+y：變 y 為 i 加 -es','study, try','studies, tries'],['母音字母+y：直接加 -s','play, enjoy','plays, enjoys'],['不規則','have, be','has, is']]},
    {title:'頻率副詞位置',columns:['副詞','大致頻率','常見位置'],rows:[['always','總是','be 後／一般動詞前'],['usually','通常','一般動詞前'],['often','經常','一般動詞前'],['sometimes','有時','句首、動詞前或句末'],['hardly ever','幾乎不','一般動詞前'],['never','從不','一般動詞前；不再加 not']]},
    {title:'現在簡單式高頻一般動詞',columns:['原形','第三人稱單數','例句'],rows:[['have','has','She has a bike.'],['like','likes','He likes music.'],['want','wants','Mia wants some water.'],['need','needs','The plant needs water.'],['know','knows','She knows the answer.'],['live','lives','Tom lives in Sydney.']],note:'先熟悉肯定句的動詞變化；否定與疑問形式會在下一課學習。'}
  ],
  questions:[
    {title:'be 與 do / does 提問表',columns:['原句動詞','疑問句開頭','例句'],rows:[['am / is / are','Am / Is / Are + 主詞','Is she ready?'],['I / you / we / they + 一般動詞','Do + 主詞 + 原形動詞','Do they work here?'],['he / she / it + 一般動詞','Does + 主詞 + 原形動詞','Does he work here?'],['have / has 表示擁有','Do / Does + 主詞 + have','Does she have a car?']]},
    {title:'本課必記否定縮寫',columns:['完整形式','縮寫','後面接什麼'],rows:[['is not','isn’t','名詞、形容詞或地點'],['are not','aren’t','名詞、形容詞或地點'],['do not','don’t','原形動詞'],['does not','doesn’t','原形動詞']],note:'doesn’t 後寫 have、like、work，不寫 has、likes、works。'}
  ],
  wh:[
    {title:'常用 WH 疑問詞',columns:['疑問詞','詢問內容','例句'],rows:[['who','誰','Who lives here?'],['what','什麼','What do you need?'],['which','哪一個（範圍有限）','Which one do you prefer?'],['where','哪裡','Where does she live?'],['when','何時','When does class start?'],['why','為什麼','Why are you late?'],['whose','誰的','Whose bag is this?'],['how','怎樣／如何','How do you get to work?']]},
    {title:'how 的常見組合',columns:['結構','詢問','例句'],rows:[['how many','可數數量','How many books?'],['how much','不可數數量／價格','How much water?'],['how often','頻率','How often do you exercise?'],['how long','時長／長度','How long is the movie?'],['how far','距離','How far is the station?'],['how old','年齡','How old is she?']]}
  ],
  'present-cont':[
    {title:'動詞變 -ing 的拼寫',columns:['規則','原形','-ing 形式'],rows:[['一般直接加 -ing','work, read','working, reading'],['不發音 e：去 e','make, write','making, writing'],['重讀閉音節：雙寫末字母','run, sit','running, sitting'],['ie 變 y','lie, die','lying, dying'],['以 y 結尾不變化','study, play','studying, playing']]},
    {title:'常見狀態動詞（一般不用進行式）',columns:['動詞','意思','正確例句'],rows:[['know','知道','I know her.'],['believe','相信','I believe you.'],['understand','理解','I understand the rule.'],['want / need','想要／需要','We need help.'],['like / prefer','喜歡／更喜歡','She prefers tea.'],['belong','屬於','The key belongs to Tom.']]}
  ],
  adjadv:[
    {title:'常見字族變化',columns:['名詞','形容詞','副詞','動詞'],rows:[['success','successful','successfully','succeed'],['care','careful / careless','carefully / carelessly','care'],['difference','different','differently','differ'],['beauty','beautiful','beautifully','beautify'],['danger','dangerous','dangerously','endanger'],['comfort','comfortable','comfortably','comfort'],['decision','decisive','decisively','decide']]},
    {title:'-ing 與 -ed 形容詞',columns:['令人……（事物）','感到……（人）','例句'],rows:[['exciting','excited','The game is exciting. I am excited.'],['interesting','interested','The book is interesting.'],['boring','bored','We were bored.'],['surprising','surprised','The result was surprising.'],['tiring','tired','The trip made me tired.'],['confusing','confused','The instructions are confusing.']]},
    {title:'不規則比較級和最高級',columns:['原級','比較級','最高級'],rows:[['good / well','better','best'],['bad / badly','worse','worst'],['many / much','more','most'],['little','less','least'],['far','farther / further','farthest / furthest']]}
  ],
  prepositions:[
    {title:'高頻動詞＋介系詞搭配',intro:'介系詞是固定搭配的一部分，應把整個短語一起記。',columns:['搭配','意思','例句'],rows:[['listen to','聽','Listen to the teacher.'],['wait for','等待','We are waiting for the bus.'],['look at','看','Look at this photo.'],['look for','尋找','I’m looking for my keys.'],['look after','照顧','She looks after the children.'],['depend on','取決於／依靠','It depends on the weather.'],['belong to','屬於','This book belongs to me.'],['agree with','同意某人／觀點','I agree with you.'],['ask for','請求','He asked for help.'],['pay for','付款','Who paid for dinner?'],['talk about','談論','We talked about work.'],['think about','考慮','Think about the question.']]},
    {title:'高頻形容詞＋介系詞搭配',columns:['搭配','意思','例句'],rows:[['afraid of','害怕','She is afraid of dogs.'],['good at','擅長','He is good at maths.'],['interested in','對……感興趣','I’m interested in history.'],['famous for','因……聞名','The city is famous for food.'],['proud of','為……自豪','We are proud of you.'],['different from','與……不同','This is different from mine.'],['responsible for','負責','She is responsible for sales.'],['angry with / about','生某人的氣／因某事生氣','He was angry with me.']]}
  ],
  past:[
    {title:'高頻不規則動詞：原形—過去式—過去分詞',columns:['原形','過去式','過去分詞','意思'],rows:[['be','was / were','been','是／在'],['go','went','gone','去'],['come','came','come','來'],['see','saw','seen','看見'],['take','took','taken','拿／帶'],['give','gave','given','給'],['get','got','got / gotten','得到'],['make','made','made','製作'],['know','knew','known','知道'],['think','thought','thought','思考'],['buy','bought','bought','購買'],['bring','brought','brought','帶來'],['speak','spoke','spoken','說'],['write','wrote','written','寫'],['eat','ate','eaten','吃'],['drink','drank','drunk','喝'],['begin','began','begun','開始'],['leave','left','left','離開'],['feel','felt','felt','感覺'],['find','found','found','找到']]},
    {title:'規則過去式拼寫',columns:['規則','原形','過去式'],rows:[['一般加 -ed','work, open','worked, opened'],['已有 e：加 -d','live, move','lived, moved'],['子音+y：y 變 i 加 -ed','study, carry','studied, carried'],['重讀閉音節：雙寫末字母','stop, plan','stopped, planned']]}
  ],
  'past-cont':[
    {title:'過去進行式構成',columns:['主詞','肯定','否定','疑問'],rows:[['I / he / she / it','was working','was not working','Was ... working?'],['you / we / they','were working','were not working','Were ... working?']]},
    {title:'背景動作與短事件常用動詞',columns:['持續背景（常用進行式）','短事件（常用過去式）','例句'],rows:[['walk, drive','fall, crash','I was driving when the car crashed.'],['sleep, study','ring, call','I was sleeping when the phone rang.'],['cook, eat','arrive, leave','We were eating when she arrived.'],['rain, snow','start, stop','It was raining when we left.']]}
  ],
  future:[
    {title:'常見未來表達對照',columns:['結構','主要用途','例句'],rows:[['will + 原形','即時決定、承諾、一般預測','I’ll help you.'],['be going to + 原形','已有計畫、有證據的預測','It’s going to rain.'],['be + doing','已約好的個人安排','I’m meeting Sam tomorrow.'],['現在簡單式','時刻表、固定日程','The train leaves at eight.']]},
    {title:'時間／條件子句不用 will',columns:['連接詞','子句形式','例句'],rows:[['when','現在簡單式','I’ll call when I arrive.'],['before / after','現在簡單式','We’ll eat after she comes.'],['until','現在簡單式','Wait until he gets here.'],['if','現在簡單式','If it rains, we’ll stay home.']]}
  ],
  modals:[
    {title:'常用情態助動詞',columns:['情態助動詞','核心意義','例句'],rows:[['can / could','能力、許可、請求','Could you help me?'],['may / might','許可、可能','It might rain.'],['must','必須；有把握的推測','You must stop.'],['have to','客觀必要','I have to work.'],['should','建議、應該','You should rest.'],['mustn’t','禁止','You mustn’t smoke here.'],['don’t have to','不必','You don’t have to come.'],['can’t','不能；不可能','He can’t be at home.']]},
    {title:'高頻形容詞＋介系詞搭配',columns:['搭配','意思','例句'],rows:[['afraid of','害怕','She is afraid of dogs.'],['good at','擅長','He is good at math.'],['interested in','對……有興趣','I am interested in art.'],['famous for','因……聞名','The city is famous for its food.'],['different from','與……不同','This is different from that.'],['ready for','準備好……','We are ready for the test.']]}
  ],
  perfect:[
    {title:'完成式常見過去分詞',columns:['原形','過去式','過去分詞'],rows:[['be','was / were','been'],['go','went','gone'],['do','did','done'],['see','saw','seen'],['take','took','taken'],['write','wrote','written'],['speak','spoke','spoken'],['break','broke','broken'],['choose','chose','chosen'],['forget','forgot','forgotten'],['know','knew','known'],['begin','began','begun']]},
    {title:'現在完成式標誌詞',columns:['詞語','常見位置／搭配','例句'],rows:[['already','肯定句中或句末','She has already left.'],['yet','疑問或否定句末','Have you finished yet?'],['just','have/has 後','I have just arrived.'],['ever / never','過去分詞前','Have you ever been there?'],['since','接起點','since 2020'],['for','接一段時間','for three years'],['so far','到目前為止','So far, we have learned ten verbs.']]},
    {title:'have 與 have got 表示擁有',columns:['形式','肯定句','疑問句'],rows:[['普通 have','She has a car.','Does she have a car?'],['have got','She has got a car.','Has she got a car?'],['否定','She doesn’t have a car.','She hasn’t got a car.']],note:'兩套形式不要混用：不說 Does she have got...?'}
  ],
  nonfinite:[
    {title:'常接 to do 的動詞',columns:['動詞','搭配','例句'],rows:[['want','want to do','I want to leave.'],['need','need to do','We need to talk.'],['decide','decide to do','She decided to stay.'],['hope','hope to do','I hope to see you.'],['plan','plan to do','They plan to travel.'],['promise','promise to do','He promised to help.'],['agree','agree to do','We agreed to wait.'],['learn','learn to do','She learned to drive.']]},
    {title:'常接 doing 的動詞／短語',columns:['動詞或短語','搭配','例句'],rows:[['enjoy','enjoy doing','I enjoy reading.'],['finish','finish doing','She finished writing.'],['avoid','avoid doing','Avoid making noise.'],['mind','mind doing','Do you mind waiting?'],['suggest','suggest doing','He suggested taking a taxi.'],['keep','keep doing','Keep trying.'],['give up','give up doing','Don’t give up learning.'],['be good at','be good at doing','She is good at drawing.']]},
    {title:'形式不同，意思不同',columns:['搭配一','搭配二','區別'],rows:[['remember to do','remember doing','記得要做／記得做過'],['stop to do','stop doing','停下來去做／停止正在做'],['try to do','try doing','努力做／試著做'],['forget to do','forget doing','忘記要做／忘記做過']]}
  ],
  clauses:[
    {title:'基礎連接詞功能表',columns:['連接詞','關係','例句'],rows:[['and','並列、遞進','She opened the door and walked in.'],['but','轉折','It was cold, but we went out.'],['or','選擇、否則','Hurry up, or you’ll miss it.'],['because','原因','We stayed home because it rained.'],['so','結果','It rained, so we stayed home.'],['although','讓步','Although it rained, we went out.'],['when / while','時間','Call me when you arrive.'],['if','條件','If it rains, we’ll stay home.']]},
    {title:'零條件句與第一條件句',columns:['類型','結構','用途'],rows:[['零條件句','If + 現在簡單式，主要子句用現在簡單式','規律、事實'],['第一條件句','If + 現在簡單式，主要子句用 will + 原形動詞','真實可能的未來']],note:'if 子句通常不用 will：If it rains，不寫 If it will rain。'}
  ],
  passive:[
    {title:'被動語態時態表',columns:['時態','結構','例句'],rows:[['現在簡單式','am/is/are + done','English is spoken here.'],['過去簡單式','was/were + done','The bridge was built in 1990.'],['現在進行式','am/is/are being + done','The road is being repaired.'],['現在完成式','have/has been + done','The work has been finished.'],['未來式','will be + done','The result will be announced.'],['情態助動詞','modal + be + done','It must be done today.']]},
    {title:'常見被動過去分詞',columns:['原形','過去分詞','常見搭配'],rows:[['make','made','be made of / from'],['build','built','be built in'],['write','written','be written by'],['speak','spoken','be spoken in'],['know','known','be known for / as'],['use','used','be used for / to'],['give','given','be given to someone'],['choose','chosen','be chosen as']]},
    {title:'通常不能變被動的不及物動詞',columns:['動詞','原因','正確表達'],rows:[['happen','沒有受詞','The accident happened.'],['arrive','沒有直接受詞','They arrived at noon.'],['sleep','沒有受詞','The baby slept.'],['die','沒有受詞','The plant died.'],['belong','需與 to 搭配','The book belongs to me.']]}
  ],
  relative:[
    {title:'關係詞選擇表',columns:['關係詞','先行詞／功能','例句'],rows:[['who','人；作主詞或受詞','the woman who called'],['whom','人；正式受詞','the person whom I met'],['whose','所屬關係','the girl whose bag is red'],['which','物','the book which won'],['that','人或物；限制性子句','the film that we watched'],['where','地點','the town where I grew up'],['when','時間','the day when we met']]},
    {title:'間接問句必記語序',columns:['直接問句','間接問句','關鍵變化'],rows:[['Where does she live?','Do you know where she lives?','改為直述句語序'],['When did he leave?','Can you tell me when he left?','去掉 did，動詞用過去式'],['Is the shop open?','Do you know if the shop is open?','Yes/No 疑問句用 if/whether'],['What time does it start?','Could you tell me what time it starts?','主詞在動詞前']]}
  ]
};

COURSE.forEach(chapter=>{chapter.memory=MEMORY_BANK[chapter.id]||[]});
