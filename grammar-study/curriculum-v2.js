// A1 → A2 → early B1 curriculum review, aligned to common beginner-course coverage.
const section=(title,intro,points,examples,note)=>({title,intro,points,examples,note});
const setLesson=(id,patch)=>{const c=COURSE.find(x=>x.id===id);Object.assign(c,patch);return c};

const beThereHave={id:'be-there-have',title:'be、there be 與 have got',desc:'表達身分、狀態、位置、存在和擁有。',level:'A1 核心',focus:'最常用的三種基礎結構',rules:['be 連接身分、狀態和地點。','there is / are 表示某處存在某物。','have / have got 表示擁有，注意各自的疑問和否定形式。'],examples:[['I am a student.','身分'],['There are two cafés nearby.','存在'],['She has got a bike.','擁有']],words:[['identity','n. 身分'],['location','n. 位置'],['exist','v. 存在'],['possession','n. 擁有']],sections:[
 section('1. be 表示「是、處於、在」','be 會根據主詞和時間變化。',['現在：I am；he / she / it is；you / we / they are。','過去：I / he / she / it was；you / we / they were。','be 後可接名詞、形容詞或地點短語。'],[['She is a doctor.','名詞說明身分。'],['They are tired.','形容詞說明狀態。'],['The keys are on the table.','介系詞短語說明地點。']]),
 section('2. there is / there are','there be 用來第一次介紹「某處有什麼」。',['單數或不可數名詞用 there is；複數名詞用 there are。','否定在 be 後加 not；疑問把 be 放到 there 前。','be 與後面第一個名詞保持單複數一致。'],[['There is some milk in the fridge.','milk 不可數，用 is。'],['Are there any shops nearby?','疑問句：Are + there。']]),
 section('3. have 與 have got','兩者都可表示擁有，have got 在口語中很常見。',['I / you / we / they have；he / she / it has。','普通 have 的疑問常用 do / does：Do you have...?','have got 的疑問直接提前 have / has：Have you got...?','不要混合兩套結構。'],[['She has a car. → Does she have a car?','普通 have 使用 does。'],['She has got a car. → Has she got a car?','have got 直接提前 has。']], 'Does she has got...? 是把兩套結構混在一起，應避免。')
],qs:[q('I ___ from Australia.','am|is|are|be',0,'主詞 I 與 am 搭配。','be'),q('My parents ___ at home.','is|am|are|be',2,'複數主詞 parents 使用 are。','be'),q('There ___ a book on the desk.','are|is|have|be',1,'a book 是單數，用 there is。','there be'),q('There ___ two windows in the room.','is|are|has|be',1,'two windows 是複數，用 there are。','there be'),q('___ there any milk?','Are|Is|Do|Does',1,'milk 不可數，使用 Is there...?','there be'),q('She ___ a new laptop.','have|has|is|are',1,'she 的 have 形式是 has。','have'),q('___ you have a passport?','Are|Do|Have got|Does',1,'普通 have 的疑問使用 Do you have...?','have'),q('Has he ___ a brother?','have|got|gets|having',1,'have got 的疑問結構是 Has he got...?','have got'),q('選擇正確句子。','Does she has a car?|Does she have a car?|Has she have a car?|She have a car.',1,'does 後主要動詞使用原形 have。','have'),q('The children ___ very quiet yesterday.','are|was|were|be',2,'複數主詞的 be 過去式是 were。','be過去式')]};

const pronouns={id:'pronouns',title:'代名詞、所有格與反身代名詞',desc:'正確使用 I/me、my/mine、myself 等常用形式。',level:'A1 核心',focus:'同一個人的不同代名詞形式',rules:['主格作主詞，受格作動詞或介系詞的受詞。','所有格形容詞後必須接名詞；所有格代名詞可獨立使用。','反身代名詞表示動作回到主詞自身，或用於強調。'],examples:[['She called me.','She 主格；me 受格'],['This is my bag. That one is mine.','my + 名詞；mine 獨立'],['He taught himself.','反身代名詞']],words:[['pronoun','n. 代名詞'],['possessive','adj. 所有格的'],['reflexive','adj. 反身的'],['belong','v. 屬於']],sections:[
 section('1. 主格與受格','位置決定形式，不由中文意思決定。',['主格：I, you, he, she, it, we, they，通常放在動詞片語前。','受格：me, you, him, her, it, us, them，放在動詞或介系詞後。'],[['They invited us.','They 作主詞；us 作 invited 的受詞。'],['Come with me.','介系詞 with 後用受格 me。']]),
 section('2. my 還是 mine','先看後面有沒有名詞。',['my, your, his, her, its, our, their 後接名詞。','mine, yours, his, hers, ours, theirs 後面不再接名詞。','its 表示「它的」；it’s 是 it is 或 it has 的縮寫。'],[['This is our room.','our 後接 room。'],['This room is ours.','ours 獨立使用。']]),
 section('3. 反身代名詞','主詞和受詞指同一個人時使用反身代名詞。',['myself, yourself, himself, herself, itself, ourselves, yourselves, themselves。','by myself 表示獨自；I did it myself 用於強調「親自」。'],[['She looked at herself in the mirror.','she 和 herself 是同一人。'],['We made the cake ourselves.','ourselves 強調親自完成。']])
],qs:[q('___ am ready.','Me|I|My|Mine',1,'句子主詞使用主格 I。','主格'),q('Can you help ___?','I|my|me|mine',2,'動詞 help 後使用受格 me。','受格'),q('She spoke to ___.','he|his|him|himself is',2,'介系詞 to 後使用受格 him。','受格'),q('This is ___ phone.','me|mine|my|I',2,'phone 前使用所有格形容詞 my。','所有格代名詞'),q('That blue car is ___.','their|theirs|them|they',1,'後面沒有名詞，使用 theirs。','所有格代名詞'),q('We enjoyed ___ at the party.','us|our|ours|ourselves',3,'enjoy oneself 表示玩得開心。','反身代名詞'),q('He fixed the bike by ___.','him|his|himself|he',2,'by himself 表示獨自。','反身代名詞'),q('The cat is washing ___ paws.','it’s|its|it|itself',1,'its 是所有格形容詞，修飾 paws。','its'),q('選擇正確句子。','This book is her.|This book is hers.|This is hers book.|This book is she.',1,'hers 可獨立作主詞補語。','所有格代名詞'),q('Anna and I made dinner ___.','ourselves|themselves|myself|us',0,'Anna and I 對應 ourselves。','反身代名詞')]};

const presentContinuous={id:'present-cont',title:'現在進行式',desc:'描述此刻、當前階段和已經安排好的近期活動。',level:'A1–A2',focus:'be + 動詞-ing',rules:['結構是 am / is / are + 動詞-ing。','常表示此刻或當前階段正在發生的動作。','狀態動詞通常使用現在簡單式，不用進行式。'],examples:[['She is talking now.','此刻'],['I am reading a useful book this week.','當前階段'],['I know the answer.','狀態動詞']],words:[['temporary','adj. 暫時的'],['currently','adv. 當前'],['happen','v. 發生'],['arrangement','n. 安排']],sections:[
 section('1. 構成與拼寫','be 承擔人稱變化，主要動詞變成 -ing。',['一般加 -ing：work → working。','以不發音 e 結尾通常去 e：make → making。','重讀閉音節可雙寫末字母：run → running。','ie 變 y：lie → lying。'],[['I am waiting.','I 使用 am。'],['They are running.','they 使用 are；run 雙寫 n。']]),
 section('2. 什麼時候使用','進行式關注「正在展開」的過程。',['now、right now、at the moment 常提示此刻。','today、this week 可表示暫時的當前階段。','已確定的近期個人安排也可使用現在進行式。'],[['We are staying with friends this week.','暫時安排。'],['I am meeting Mia tomorrow.','已經約好的近期安排。']]),
 section('3. 與現在簡單式對比','習慣用現在簡單式，眼前或暫時動作使用進行式。',['She works at a bank. 表示長期工作。','She is working from home today. 表示今天的臨時情況。','know、like、want、believe 等狀態動詞通常不用進行式。'],[['I like this song.','不是 I am liking。'],['What do you do? / What are you doing?','職業或習慣 / 此刻正在做什麼。']])
],qs:[q('Look! It ___.','rains|is raining|rain|rained',1,'Look 提示此刻正在發生。','現在進行式'),q('I ___ dinner right now.','cook|am cooking|cooked|cooks',1,'right now 使用現在進行式。','現在進行式'),q('She ___ a red coat today.','wears always|is wearing|wear|wore every day',1,'today 的臨時狀態用現在進行式。','暫時動作'),q('They are ___ in the park.','run|runing|running|ran',2,'run 變 running 時雙寫 n。','ing拼寫'),q('He is ___ a cake.','makeing|making|made|makes',1,'make 去 e 加 ing。','ing拼寫'),q('I ___ the answer.','am knowing|know|knowing|knows',1,'know 是狀態動詞，通常不用進行式。','狀態動詞'),q('She usually drives, but today she ___ the bus.','takes|is taking|take|took now',1,'today 與通常習慣對比，使用進行式。','時態對比'),q('___ they waiting outside?','Do|Are|Is|Does',1,'進行式疑問句把 are 提前。','疑問句'),q('We ___ Tom tomorrow evening; the table is booked.','meet|are meeting|met|meets',1,'已安排的近期活動可用現在進行式。','未來安排'),q('選擇正確句子。','I am want a coffee.|I wanting a coffee.|I want a coffee.|I do wanting a coffee.',2,'want 是狀態動詞，使用現在簡單式。','狀態動詞')]};

const prepositions={id:'prepositions',title:'時間、地點與方向介系詞',desc:'掌握日常表達中最高頻的 in、on、at 和移動介系詞。',level:'A1–A2',focus:'介系詞與時間、空間關係',rules:['at 常指具體點，on 常指表面或具體日期，in 常指範圍內部。','時間表達中 at + 時刻，on + 日期/星期，in + 月份/年份/較長時期。','方向介系詞描述移動，地點介系詞描述位置。'],examples:[['at 7 o’clock','具體時刻'],['on Monday','具體日期'],['in July','月份']],words:[['preposition','n. 介系詞'],['location','n. 位置'],['direction','n. 方向'],['movement','n. 移動']],sections:[
 section('1. 時間：at / on / in','從最具體的點到更大的時間範圍。',['at + 時刻：at 8:30；也用於 at night。','on + 星期或日期：on Friday, on 12 May。','in + 月、年、季節或較長時期：in June, in 2026。','last、next、this、every 前通常不加介系詞。'],[['The class starts at nine.','具體時刻。'],['We met on Monday in April.','星期用 on，月份用 in。']]),
 section('2. 地點：at / on / in','思考「點、表面、內部範圍」。',['at 表示一個地點點位：at the station。','on 表示在表面上：on the wall。','in 表示在內部或較大區域：in the room, in Australia。'],[['She is waiting at the bus stop.','把車站看作一個點。'],['There is a picture on the wall.','接觸牆面。']]),
 section('3. 位置與移動','位置和方向不要混淆。',['位置：under, above, behind, between, next to, opposite。','移動：to, into, out of, across, through, along, past。','into 強調進入內部；in 表示已經在內部。'],[['He walked into the room.','從外面進入。'],['He is in the room.','現在的位置。']])
],qs:[q('The lesson starts ___ 9 a.m.','in|on|at|to',2,'具體時刻使用 at。','時間介系詞'),q('We have class ___ Monday.','at|on|in|by',1,'星期前使用 on。','時間介系詞'),q('She was born ___ 2001.','at|on|in|from',2,'年份前使用 in。','時間介系詞'),q('The keys are ___ the table.','on|at time|into|to',0,'在桌面上使用 on。','地點介系詞'),q('He lives ___ Canada.','at|on|in|to',2,'國家範圍內部使用 in。','地點介系詞'),q('Meet me ___ the station.','in year|at|on Monday|into',1,'把車站看作會面點時用 at。','地點介系詞'),q('The cat is ___ the chair.','under|across|through|to',0,'under 表示在下方。','位置介系詞'),q('She walked ___ the room and sat down.','in|into|at|on',1,'有進入動作，使用 into。','方向介系詞'),q('We drove ___ the bridge.','across|under of|between to|in',0,'across 表示從一邊到另一邊。','方向介系詞'),q('選擇正確表達。','on next Monday|in yesterday|at 2025|next Monday',3,'last、next、this、every 前通常不加介系詞。','零介系詞')]};

const pastContinuous={id:'past-cont',title:'過去進行式',desc:'描述過去某個時刻正在發生的背景動作。',level:'A2',focus:'was / were + 動詞-ing',rules:['結構是 was / were + 動詞-ing。','長背景動作常與過去簡單式的短事件配合。','while 常連接持續動作，when 常引入發生的事件。'],examples:[['I was reading at eight.','過去某時正在進行'],['I was reading when she called.','背景＋事件'],['While I was cooking, he was setting the table.','兩個同時動作']],words:[['background','n. 背景'],['interrupt','v. 打斷'],['while','conj. 當……時'],['suddenly','adv. 突然']],sections:[
 section('1. 構成與用途','把鏡頭放在過去某個時刻的動作過程上。',['I / he / she / it 用 was；you / we / they 用 were。','否定在 was / were 後加 not。','疑問把 was / were 放在主詞前。'],[['At 10 p.m., I was sleeping.','十點時動作正在進行。'],['Were they waiting?','把 were 提前。']]),
 section('2. 背景動作與短事件','背景動作使用過去進行式，突然發生或完成的事件用過去簡單式。',['I was walking home when it started to rain.','when 後不一定永遠用過去簡單式，要看動作是過程還是事件。'],[['The phone rang while I was having a shower.','洗澡是背景，電話響是短事件。']]),
 section('3. 兩個同時進行的動作','兩個動作在過去同時持續時，都可以使用過去進行式。',['while 比 when 更強調兩件事同時持續。'],[['While Mia was studying, Leo was watching TV.','兩個動作同時進行。']])
],qs:[q('At eight last night, I ___.','was studying|studied now|am studying|study',0,'過去具體時刻正在發生，用過去進行式。','過去進行式'),q('They ___ dinner when I arrived.','had|were having|are having|have',1,'吃飯是背景動作。','背景動作'),q('The phone ___ while I was sleeping.','rang|was ringing once|rings|ring',0,'電話響是發生並完成的短事件。','時態對比'),q('While we ___, it started to snow.','walked always|were walking|are walking|have walked',1,'while 引出持續背景動作。','while'),q('She was ___ when the lights went out.','read|reading|reads|to read',1,'was 後接動詞-ing。','結構'),q('___ you working at six?','Did|Were|Was|Are',1,'you 的過去進行式疑問使用 Were。','疑問句'),q('He ___ not listening.','did|was|had|is yesterday',1,'過去進行式否定為 was not listening。','否定句'),q('While I was cooking, Sam ___.','was washing the dishes|washed every day|is washing|wash',0,'兩個同時持續的動作都可用過去進行式。','同時動作'),q('選擇正確句子。','I was walk home when it rained.|I was walking home when it started to rain.|I walked home while it was start.|I am walking yesterday.',1,'背景使用 was walking，短事件使用 started。','時態對比'),q('What ___ at 9 p.m. yesterday?','did you doing|were you doing|are you do|you were do',1,'過去進行式特殊疑問：What were you doing...?','疑問句')]};

const relative={id:'relative',title:'關係子句與間接問句',desc:'用 who、which、that 描述名詞，並使用禮貌的間接提問。',level:'A2–B1 銜接',focus:'修飾名詞與嵌入問題',rules:['關係子句緊跟被修飾的名詞。','who 指人，which 指物，that 常可指人或物。','間接問句使用直述句語序。'],examples:[['The woman who called is my aunt.','who 指人'],['The book that I bought is useful.','that 指物'],['Do you know where he lives?','直述句語序']],words:[['relative clause','n. 關係子句'],['describe','v. 描述'],['indirect','adj. 間接的'],['polite','adj. 禮貌的']],sections:[
 section('1. 關係子句做什麼','它像一段較長的形容詞，放在名詞後說明「哪一個」。',['先行詞是人常用 who / that。','先行詞是物常用 which / that。','whose 表示所屬；where 表示地點。'],[['The student who sits there is new.','who 子句說明是哪位學生。'],['This is the café where we met.','where 子句說明是哪家咖啡館。']]),
 section('2. 關係詞作主詞或受詞','看關係詞在子句中缺什麼成分。',['作主詞時不能省略：The man who lives next door。','作受詞時常可省略：The book (that) I bought。','逗號補充資訊的非限制性子句通常不用 that。'],[['The film that won the award...','that 作 won 的主詞，不能省略。'],['The film (that) we watched...','that 作 watched 的受詞，可以省略。']]),
 section('3. 間接問句','禮貌提問或把問題放進另一個句子時，內部使用直述句語序。',['直接問句：Where does she live?','間接問句：Could you tell me where she lives?','Yes/No 疑問句嵌入時使用 if / whether。'],[['Do you know if the shop is open?','內部不是 is the shop open。'],['Can you tell me what time it starts?','內部使用 it starts。']])
],qs:[q('The woman ___ lives next door is a doctor.','which|who|where|whose',1,'先行詞是人，關係詞在子句中作主詞，用 who。','who'),q('This is the phone ___ I bought.','who|where|that|whose',2,'先行詞是物，that 可作受詞。','that'),q('The girl ___ bag is red is my sister.','who|whose|which|where',1,'whose 表示所屬關係。','whose'),q('That is the town ___ I grew up.','who|which person|where|whose',2,'先行詞是地點，使用 where。','where'),q('關係詞可以省略的是？','The man who called|The book that I read|The dog which barked|The student who won',1,'that 作 read 的受詞，可以省略。','關係詞省略'),q('Could you tell me where she ___?','does live|lives|live|is live',1,'間接問句使用直述句語序。','間接問句'),q('Do you know ___ the bank is open?','what|if|does|that is',1,'嵌入Yes/No 疑問句使用 if / whether。','if-whether'),q('選擇正確句子。','Can you tell me where is the station?|Can you tell me where the station is?|Can you tell me where does the station be?|Can you tell where is station?',1,'間接問句內部使用直述句語序。','間接問句'),q('The film ___ won the award was excellent.','that|where|whose|it',0,'that 在子句中作主詞，不能省略。','that'),q('My brother, ___ lives in Perth, is visiting.','that|who|where|what',1,'逗號後的補充性關係子句指人，用 who。','非限制性子句')]};

// Make new chapters available before applying cross-chapter additions below.
[beThereHave,pronouns,presentContinuous,prepositions,pastContinuous,relative].forEach(c=>{if(!COURSE.some(x=>x.id===c.id))COURSE.push(c)});

// Split previously combined tense chapters and deepen every retained lesson.
setLesson('nouns',{sections:[section('1. 可數與不可數','先判斷名詞能否直接計數。',['單數可數名詞前通常需要 a/an、the、this、my 等限定詞。','不可數名詞通常沒有複數，也不用 a/an。','advice、information、furniture、homework 是常見不可數名詞。'],[['a piece of advice','用量詞表達一條建議。'],['some information','information 不加 s。']]),section('2. 冠詞 a/an/the','a/an 是泛指一個，the 指雙方都能確定的對象。',['a/an 的選擇看讀音，不只看字母。','第一次提及常用 a/an，再次提及可用 the。','獨一事物、最高級前常用 the。'],[['I saw a dog. The dog was friendly.','先泛指，再特指。']]),section('3. 數量詞','可數性決定數量詞。',['many / a few / few + 可數複數。','much / a little / little + 不可數。','some / any / a lot of 可與兩類名詞搭配。'],[['There are a few chairs.','有幾把，偏肯定。'],['There is little time.','幾乎沒時間，偏否定。']]) ]});

setLesson('present',{title:'現在簡單式與頻率副詞',desc:'表達日常習慣、事實、長期狀態和固定安排。',focus:'原形 / 第三人稱單數',rules:['現在簡單式表示習慣、事實和長期狀態。','he / she / it 後的動詞通常加 -s 或 -es。','頻率副詞放在一般動詞前、be 動詞後。'],sections:[section('1. 什麼時候使用','現在簡單式不等於「此刻」，它關注規律和狀態。',['習慣：I walk to work every day。','事實：Water boils at 100°C。','長期狀態：She lives in Sydney。','時刻表：The train leaves at eight。'],[['I know the answer.','know 是狀態動詞。']]),section('2. 第三人稱單數','he、she、it 是最常見易錯點。',['大多數動詞加 -s。','-s, -sh, -ch, -x, -o 結尾常加 -es。','子音字母 + y 變 y 為 i 加 -es。','have → has；do → does；go → goes。'],[['She watches TV.','watch → watches。'],['He studies English.','study → studies。']]),section('3. 頻率副詞','位置通常由動詞片語類型決定。',['always, usually, often, sometimes, rarely, never。','一般動詞前：She often walks。','be 後：She is often late。'],[['How often do you exercise?','詢問頻率。']])],qs:[q('She ___ to work every day.','walk|walks|is walking now|walked',1,'日常習慣用現在簡單式，she 後加 s。','第三人稱'),q('Water ___ at 100°C.','boil|boils|is boiling always|boiled',1,'客觀事實使用現在簡單式。','事實'),q('He ___ TV every evening.','watch|watches|watchs|is watch',1,'watch 以 ch 結尾，加 es。','第三人稱'),q('Mia ___ English at school.','study|studys|studies|studying',2,'子音 + y 變 y 為 i 加 es。','第三人稱'),q('I ___ the answer.','am knowing|know|knows|knowing',1,'know 是狀態動詞。','狀態動詞'),q('She is ___ late.','often|often is|late often before is|does often',0,'頻率副詞放在 be 後。','頻率副詞'),q('They ___ eat breakfast at home.','usually|are usually|usual|are usual eat',0,'頻率副詞放在一般動詞 eat 前。','頻率副詞'),q('The train ___ at 7:15 tomorrow.','leave|leaves|is leave|will leaves',1,'固定時刻表可用現在簡單式。','時刻表'),q('選擇正確句子。','He don’t like tea.|He doesn’t likes tea.|He doesn’t like tea.|He not likes tea.',2,'doesn’t 後使用原形動詞。','否定句'),q('How often ___ she exercise?','do|does|is|has',1,'she 的現在簡單式疑問使用 does。','疑問句')]});

setLesson('wh',{sections:[section('1. 選擇疑問詞','先確定想知道的資訊類型。',['who 人；what 事物；which 有限選擇；whose 所屬。','where 地點；when 時間；why 原因；how 方式或狀態。'],[['Why are you late? — Because...','why 問原因。']]),section('2. how 組合','how 與其他片語組合成高頻問題。',['how many + 可數複數；how much + 不可數或價格。','how often 頻率；how long 時長；how far 距離；how old 年齡。'],[['How long have you lived here?','詢問持續多久。']]),section('3. 對主詞還是受詞提問','這是 who 問句最關鍵的區別。',['Who called you? who 就是主詞，不加 did。','Who did you call? who 是受詞，需要 did。'],[['Who broke the window?','不知道動作執行者，直接用 who + 動詞片語。']]) ]});

setLesson('adjadv',{sections:[section('1. 形容詞、連綴動詞與副詞','先找被修飾或被說明的對象。',['形容詞可修飾名詞，或放在連綴動詞後說明主詞。','常見連綴動詞有 be、seem、become。','感官連綴動詞 look、sound、smell、taste、feel 後通常接形容詞。','副詞修飾動詞、形容詞、副詞或整句。','friendly、lovely 雖以 -ly 結尾，通常是形容詞。'],[['She is a careful driver.','careful 修飾 driver。'],['She drives carefully.','carefully 修飾 drives。']]),section('2. -ed 與 -ing','區分感受者和引發感受的事物。',['-ed 常描述人的感受：I am bored。','-ing 常描述令人產生感受的事物：The class is boring。'],[['The result was surprising. We were surprised.','事情令人驚訝；人感到驚訝。']]),section('3. 比較級與最高級','比較兩者用比較級，三者或範圍內最高用最高級。',['短詞常加 -er/-est；長詞常用 more/most。','good → better → best；bad → worse → worst。','比較級後常用 than；最高級前通常有 the。'],[['This book is more useful than that one.','長形容詞用 more。']]) ]});

setLesson('past',{title:'過去簡單式',desc:'表達過去發生並結束的動作和狀態。',focus:'過去式與 did',rules:['明確結束的過去事件使用過去簡單式。','規則動詞加 -ed，不規則動詞需要記憶。','否定和疑問使用 did，主要動詞恢復原形。'],sections:[section('1. 過去式','時間已經結束是核心。',['規則動詞一般加 -ed。','常見不規則：go→went, see→saw, buy→bought, take→took。','be 的過去式是 was / were。'],[['We visited Melbourne last year.','last year 已結束。']]),section('2. 否定與疑問','did 承擔過去式。',['否定：did not / didn’t + 原形。','疑問：Did + 主詞 + 原形？','be 句直接使用 was / were，不加 did。'],[['Did she go?','不是 Did she went。'],['Was he tired?','be 直接提前。']]),section('3. 敘述連續事件','講故事時，一連串完成動作都可用過去簡單式。',['first、then、after that、finally 幫助組織順序。'],[['She opened the door, walked in and sat down.','三個連續完成動作。']])],qs:[q('We ___ to the beach last Sunday.','go|went|gone|were go',1,'last Sunday 用過去簡單式。','過去式'),q('Did you ___ the email?','received|receive|receiving|receives',1,'did 後用原形。','原形動詞'),q('She ___ not call me.','does|did|was|is',1,'過去式否定使用 did not。','否定句'),q('___ he tired after work?','Did|Was|Does|Is yesterday',1,'tired 前用 be，過去式 he was。','be過去式'),q('buy 的過去式是？','buyed|bought|brought|buying',1,'buy 的不規則過去式是 bought。','不規則動詞'),q('go 的過去式是？','gone|went|goed|going',1,'went 是過去式；gone 是過去分詞。','不規則動詞'),q('They ___ home, opened the door and sat down.','returned|return|were return|have return',0,'連續完成的過去動作使用過去簡單式。','敘事'),q('選擇正確句子。','Did she went home?|Did she go home?|She didn’t went home.|Was she go home?',1,'did 後使用原形 go。','原形動詞'),q('I ___ him yesterday.','see|seen|saw|have seen',2,'yesterday 是明確過去的時間，see 的過去式是 saw。','過去式'),q('We ___ at home last night.','are|was|were|be',2,'we 的 be 過去式是 were。','be過去式')]});

setLesson('future',{sections:[section('1. will','用於即時決定、承諾和沒有明顯證據的一般預測。',['結構：will + 原形動詞。','否定：will not / won’t。','疑問：Will + 主詞 + 原形？'],[['The phone is ringing. I’ll answer it.','即時決定。']]),section('2. be going to','用於已有意圖或根據眼前證據作預測。',['be 隨主詞變化；going to 後用原形。'],[['Look at those clouds. It is going to rain.','有眼前證據。']]),section('3. 已安排與時間表','未來不只有 will。',['現在進行式表示已安排的個人活動。','現在簡單式表示固定日程、時刻表。','when / if 時間條件子句中常用現在簡單式代替 will。'],[['I’m meeting Jo tomorrow.','已約好。'],['I’ll call when I arrive.','不是 when I will arrive。']]) ]});

setLesson('modals',{sections:[section('1. 基本結構','情態助動詞後直接接原形。',['沒有第三人稱 -s。','否定直接加 not。','疑問把情態助動詞放到主詞前。'],[['She can swim. / Can she swim?','can 不變化。']]),section('2. 常用功能','一個情態助動詞可有多個語用功能。',['can/could：能力、請求、許可。','should：建議；must/have to：義務。','may/might：可能性。'],[['You should rest.','建議。']]),section('3. 禁止、不必與推測','相似形式可能意義完全不同。',['mustn’t = 禁止；don’t have to = 不必。','must be = 很可能；might be = 可能；can’t be = 不可能。'],[['You mustn’t park here.','禁止停車。'],['You don’t have to come early.','沒有必要早來。']]) ]});

setLesson('perfect',{sections:[section('1. 構成與過去分詞','have / has + 過去分詞。',['規則過去分詞常與過去式相同。','常見不規則：go→gone, see→seen, write→written。'],[['She has finished.','she 使用 has。']]),section('2. 三種常見用途','完成式把過去與現在連接起來。',['當前結果：I have lost my key。','人生經歷：Have you ever been...?','持續到現在：We have lived here for five years。'],[['She has just arrived.','剛到，現在已經在這裡。']]),section('3. 與過去簡單式對比','看時間是否是已結束的明確過去。',['yesterday、last year、in 2020 通常用過去簡單式。','ever、never、already、yet、just 常與現在完成式搭配。','since + 起點；for + 時長。'],[['I saw him yesterday.','明確過去的時間。'],['I have seen that film twice.','經歷，沒有指定結束時間。']]) ]});

setLesson('nonfinite',{sections:[section('1. to do','不定詞常表示計畫、意願和目的。',['want, hope, decide, plan + to do。','too / enough + to do。','動詞不定詞可表示目的。'],[['I went out to buy milk.','目的。']]),section('2. doing','動名詞把動作當成一件事。',['enjoy, avoid, finish, mind + doing。','介系詞後使用 doing。','doing 可作句子主詞。'],[['Reading helps me relax.','Reading 作主詞。']]),section('3. 形式改變，意義改變','少數動詞後兩種形式意義不同。',['stop doing 停止正在做；stop to do 停下來去做。','remember doing 記得做過；remember to do 記得要做。','try doing 嘗試方法；try to do 努力完成。'],[['I stopped smoking. / I stopped to smoke.','停止吸菸 / 停下來去吸菸。']]) ]});

setLesson('clauses',{title:'連接詞與基礎條件句',desc:'用 and、but、because、although、if 等連接完整意思。',focus:'從簡單句到複合句',rules:['and、but、or、so 連接並列資訊。','because、when、although 引導原因、時間和讓步子句。','零條件句講規律，第一條件句講真實可能的未來。'],sections:[section('1. 並列連接詞','選擇詞取決於邏輯關係。',['and 新增；but 轉折；or 選擇；so 結果。','不要在同一結構中重複 because...so 或 although...but。'],[['It was raining, so we stayed home.','原因導致結果。']]),section('2. 常用副詞子句','子句為主要子句補充時間、原因或讓步。',['because + 完整句；because of + 名詞短語。','although 表示儘管；when/while/as soon as 表示時間。'],[['Although it was late, we kept working.','讓步關係。']]),section('3. 零條件與第一條件','if 子句中通常不用 will。',['零條件：If + 現在時，主要子句現在時，表示規律。','第一條件：If + 現在時，主要子句 will + 原形，表示真實可能。'],[['If you heat ice, it melts.','規律。'],['If it rains, we will stay home.','未來可能。']])],qs:[q('I stayed home ___ it was raining.','because|but|so|because of',0,'because 後接完整句。','原因'),q('It was raining, ___ we stayed home.','because|so|although|or',1,'後半句是結果，用 so。','結果'),q('___ he was tired, he kept working.','Although|Because of|So|And',0,'前後是讓步關係。','讓步'),q('We can walk ___ take the bus.','because|or|so|although',1,'兩種選擇使用 or。','選擇'),q('If you heat water to 100°C, it ___.','will boiled|boils|boil|is boil',1,'規律使用零條件句的現在時。','零條件句'),q('If it rains tomorrow, we ___ home.','stay yesterday|will stay|will stayed|stayed',1,'第一條件句主要子句使用 will + 原形。','第一條件句'),q('I’ll call you when I ___.','will arrive|arrive|arrived tomorrow|am arrive',1,'時間子句中用現在簡單式代替 will。','時間子句'),q('選擇正確句子。','Because it rained, so we stayed home.|Because it rained, we stayed home.|Although it rained, but we went out.|Because of it rained, we stayed home.',1,'because 不與 so 重複。','連接詞'),q('She left early ___ she was feeling ill.','because|although|but|or',0,'解釋原因使用 because。','原因'),q('___ you finish, please turn off the computer.','As soon as|Because of|Despite|So',0,'as soon as 表示一完成就。','時間子句')]});

setLesson('passive',{sections:[section('1. 為什麼使用被動','焦點是動作承受者，而不是執行者。',['執行者未知、不重要或顯而易見時常用被動。','需要強調執行者時使用 by。'],[['My phone was stolen.','不知道或不強調小偷是誰。']]),section('2. 構成','be 承擔時態，主要動詞使用過去分詞。',['現在：am/is/are + done。','過去：was/were + done。','未來：will be + done。','完成：has/have been + done。'],[['English is spoken here.','現在簡單式被動。']]),section('3. 主動轉被動','先找主動句的受詞。',['受詞移到主詞位置。','依新主詞和原時態選擇 be。','主要動詞改為過去分詞。'],[['They built the bridge. → The bridge was built.','bridge 從受詞變主詞。']]) ]});

COURSE.find(c=>c.id==='nouns').sections.push(section('4. the 與零冠詞','有些常見表達不需要冠詞。',['語言、學科、運動和泛指複數通常不用冠詞：speak English, play tennis, Dogs are friendly。','表示日常功能時常說 go to school / be at work / go home。','大多數國家和城市不用 the；複數或聯合名稱常用 the，如 the United States。'],[['I go to school by bus.','school 表示日常功能，不加 the。'],['The school near my home is new.','指特定學校，使用 the。']]));
COURSE.find(c=>c.id==='pronouns').sections.push(section('4. 指示詞與名詞所有格','用距離、單複數和所有關係選擇形式。',['this / these 指較近；that / those 指較遠。','this / that 接單數；these / those 接複數。','單數名詞通常加 ’s：Tom’s book；規則複數只加撇號：the students’ room。'],[['These shoes are mine.','these 對應複數 shoes。'],['This is Anna’s bag.','’s 表示包屬於 Anna。']]));
COURSE.find(c=>c.id==='pronouns').qs.push(q('___ shoes over here are new.','This|That|These|It',2,'shoes 是複數且距離較近，使用 these。','指示詞'),q('This is ___ desk.','Tom|Toms|Tom’s|Toms’',2,'單數名詞 Tom 加 ’s 表示所有。','名詞所有格'));
COURSE.find(c=>c.id==='modals').sections.push(section('4. 命令、請求與建議','日常交流中常用簡潔結構推動行動。',['祈使句使用原形動詞：Open the door。否定用 Don’t + 原形。','Let’s + 原形用於共同建議。','Can / Could you...? 用於請求；Could 通常更委婉。','Why don’t we...? 和 How about + doing...? 也可提出建議。'],[['Please sit down. / Don’t touch that.','肯定與否定祈使句。'],['Could you help me?','禮貌請求。']]));
COURSE.find(c=>c.id==='modals').qs.push(q('___ the window, please.','Opening|Open|To open|Opened',1,'祈使句使用原形動詞。','祈使句'),q('Let’s ___ a break.','to take|taking|take|took',2,'Let’s 後使用原形動詞。','建議'));
COURSE.find(c=>c.id==='past').sections.push(section('4. used to 表示過去習慣','用於過去經常發生、現在通常不再發生的狀態或習慣。',['肯定：used to + 原形動詞。','否定：didn’t use to + 原形。','疑問：Did ... use to + 原形？'],[['I used to walk to school.','過去常常步行，現在情況不同。'],['Did you use to live here?','did 後寫 use，不寫 used。']]));
COURSE.find(c=>c.id==='past').qs.push(q('I ___ play outside every day when I was a child.','use to|used to|was use to|using to',1,'過去習慣使用 used to + 原形。','used to'),q('Did she ___ live here?','used to|use to|using to|uses to',1,'did 後使用 use to。','used to'));

// Refine the early path so every lesson depends only on concepts already taught.
setLesson('skeleton',{rules:['完整句通常需要主詞和動詞。','動詞可分為不及物、及物與連綴動詞，後面接的成分不同。','先辨認句子骨架，再判斷受詞、主詞補語或受詞補語。'],sections:[
 section('1. 先認識四個核心成分','先找「誰／什麼」以及「做什麼／是什麼」。',['主詞：句子談論的人或事物。','動詞：說明動作、狀態或身分。','受詞：動作直接影響的對象。','補語：補充說明主詞或受詞。'],[['Amy opened the door.','Amy 是主詞；opened 是動詞；the door 是受詞。'],['Amy is tired.','tired 說明 Amy 的狀態，是主詞補語。']]),
 section('2. 動詞決定後面的結構','不要看到動詞後面有字，就全部當成受詞。',['不及物動詞後不直接接受詞：The baby sleeps。','及物動詞後直接接受詞：She reads books。','連綴動詞後接主詞補語，不接受詞。常見的有 be、seem、become。','感官連綴動詞包括 look（看起來）、sound（聽起來）、smell（聞起來）、taste（嚐起來）、feel（感覺起來）。'],[['Birds fly.','fly 是不及物動詞。'],['We like music.','like 是及物動詞，music 是受詞。'],['Mia became a doctor.','became 是連綴動詞；a doctor 說明 Mia。'],['You look tired.','look 表示「看起來」；tired 是主詞補語。'],['The idea sounds good.','sound 表示「聽起來」；good 說明 idea。'],['The flowers smell sweet.','smell 表示「聞起來」；sweet 說明 flowers。'],['The soup tastes delicious.','taste 表示「嚐起來」；delicious 說明 soup。'],['This blanket feels soft.','feel 表示「摸起來／感覺起來」；soft 說明 blanket。']]),
 section('3. 五大基本句型','先掌握骨架，不必在本課學新的時態。',['SV：主詞＋動詞。','SVC：主詞＋連綴動詞＋主詞補語。','SVO：主詞＋動詞＋受詞。','SVOO：主詞＋動詞＋間接受詞＋直接受詞。','SVOC：主詞＋動詞＋受詞＋受詞補語。'],[['My uncle gave me a camera.','me 是間接受詞；a camera 是直接受詞。'],['The news made me happy.','happy 說明受詞 me，是受詞補語。']]),
 section('4. 受詞補語的基本判斷','本課先學最常見的名詞與形容詞受詞補語。',['形容詞可說明受詞的狀態：make me happy。','名詞可重新命名受詞：call him Tom。','如果兩個成分是「給誰」與「給什麼」，則是雙受詞。'],[['They elected her president.','her 就是 president，所以 president 是受詞補語。'],['They gave her a gift.','her 與 a gift 都是受詞，不是受詞補語。']]),
 section('5. 用詞類幫助判斷','詞類是判斷句子成分的線索。',['名詞與代名詞常作主詞或受詞。','形容詞常修飾名詞或作補語。','副詞常修飾動詞、形容詞或整句。'],[['Happiness matters.','happiness 是名詞，可作主詞。'],['She smiled happily.','happily 是副詞，修飾 smiled。']])
]});

setLesson('be-there-have',{title:'be 動詞與 there be',desc:'用 be 表達身分、狀態與位置；用 there be 表達存在。',focus:'am / is / are 與 there is / are',rules:['be 動詞依主詞使用 am、is 或 are。','be 後可接名詞、形容詞或地點介系詞片語。','there is / are 用來表示某處有某人或某物。'],examples:[['I am a student.','身分'],['She is tired.','狀態'],['There are two cafés nearby.','存在']],words:[['identity','n. 身分'],['state','n. 狀態'],['location','n. 位置'],['exist','v. 存在']],sections:[
 section('1. be 動詞的現在式','先依主詞選擇 am、is 或 are。',['I 用 am。','he / she / it 與單數名詞用 is。','you / we / they 與複數名詞用 are。'],[['I am ready.','I 與 am 搭配。'],['The children are quiet.','複數主詞用 are。']]),
 section('2. be 後面接什麼','be 負責連接主詞與後面的說明。',['名詞說明身分：She is a doctor。','形容詞說明狀態：They are tired。','介系詞片語說明位置：The keys are on the table。'],[['My brother is a teacher.','teacher 說明身分。'],['The books are in the bag.','in the bag 說明位置。']]),
 section('3. there is / there are','用來第一次介紹某處存在的人或物。',['單數或不可數名詞用 there is。','複數名詞用 there are。','先看 be 後面的名詞是單數、複數還是不可數。'],[['There is a book on the desk.','a book 是單數。'],['There are two windows in the room.','two windows 是複數。'],['There is some milk in the fridge.','milk 是不可數名詞。']])
],qs:[q('I ___ from Australia.','am|is|are|be',0,'主詞 I 與 am 搭配。','be'),q('My parents ___ at home.','is|am|are|be',2,'複數主詞 parents 使用 are。','be'),q('Mia ___ a student.','am|is|are|be',1,'Mia 是單數主詞，使用 is。','be'),q('The keys ___ on the table.','is|am|are|be',2,'keys 是複數，使用 are。','be'),q('There ___ a book on the desk.','are|is|have|be',1,'a book 是單數，用 there is。','there be'),q('There ___ two windows in the room.','is|are|has|be',1,'two windows 是複數，用 there are。','there be'),q('There ___ some water in the bottle.','are|is|be|have',1,'water 是不可數名詞，用 there is。','there be'),q('選出正確句子。','She are happy.|She is happy.|She am happy.|She be happy.',1,'she 與 is 搭配。','be'),q('選出正確句子。','There are a café nearby.|There is a café nearby.|There am a café nearby.|There have a café nearby.',1,'a café 是單數，用 there is。','there be'),q('The students ___ quiet.','is|are|am|be',1,'students 是複數，使用 are。','be')]});

setLesson('present',{title:'現在簡單式與頻率副詞',desc:'用一般動詞表達習慣、事實、長期狀態與擁有。',focus:'原形動詞 / 第三人稱單數',rules:['現在簡單式表示習慣、事實和長期狀態。','he / she / it 後的動詞通常加 -s 或 -es。','have 表示擁有時，第三人稱單數形式是 has。','頻率副詞通常放在一般動詞前、be 動詞後。'],sections:[
 section('1. 什麼時候使用','現在簡單式關注固定、重複或長期的情況。',['習慣：I walk to work every day。','事實：Water boils at 100°C。','長期狀態：She lives in Sydney。','固定時刻表：The train leaves at eight。'],[['I know the answer.','know 表示長期狀態。']]),
 section('2. 第三人稱單數','he、she、it 是本課最重要的變化。',['大多數動詞加 -s。','-s、-sh、-ch、-x、-o 結尾常加 -es。','子音字母 + y：變 y 為 i，再加 -es。','have → has；do → does；go → goes。'],[['She watches TV.','watch → watches。'],['He studies English.','study → studies。']]),
 section('3. have 與其他一般動詞','表示擁有的 have 和 like、need、want 一樣，可作一般動詞。',['I / you / we / they have。','he / she / it has。','本課先學肯定句；下一課再學用 do / does 否定與提問。'],[['I have a bike.','I 使用 have。'],['She has a bike.','she 使用 has。'],['They need more time.','need 是一般動詞。']]),
 section('4. 頻率副詞','位置取決於句中的動詞類型。',['always、usually、often、sometimes、rarely、never。','一般動詞前：She often walks。','be 動詞後：She is often late。'],[['They usually eat at home.','usually 放在一般動詞 eat 前。']])
],qs:[q('She ___ to work every day.','walk|walks|is walking now|walked',1,'日常習慣用現在簡單式，she 後加 s。','第三人稱'),q('Water ___ at 100°C.','boil|boils|boiling|boiled',1,'客觀事實使用現在簡單式。','事實'),q('He ___ TV every evening.','watch|watches|watchs|watching',1,'watch 以 ch 結尾，加 es。','第三人稱'),q('Mia ___ English at school.','study|studys|studies|studying',2,'子音 + y 變 y 為 i 加 es。','第三人稱'),q('I ___ the answer.','know|knows|knowing|known',0,'主詞 I 後使用原形 know。','原形動詞'),q('She ___ a new laptop.','have|has|having|haves',1,'she 後使用 has。','have-has'),q('We ___ two children.','has|have|having|haves',1,'we 後使用 have。','have-has'),q('She is ___ late.','often|often is|late often|does often',0,'頻率副詞放在 be 後。','頻率副詞'),q('They ___ eat breakfast at home.','usually|are usually|usual|are usual eat',0,'頻率副詞放在一般動詞前。','頻率副詞'),q('The train ___ at 7:15 every morning.','leave|leaves|leaving|left',1,'固定時刻表可用現在簡單式。','時刻表')]});

setLesson('questions',{title:'現在簡單式的否定句與 Yes/No 疑問句',desc:'比較 be 動詞與一般動詞在現在簡單式中的否定和提問方式。',focus:'be 直接變化；一般動詞用 do / does',rules:['be 動詞後加 not；提問時把 be 移到主詞前。','一般動詞用 do / does 構成否定句和疑問句。','does 已帶有第三人稱單數資訊，主要動詞要恢復原形。'],sections:[
 section('1. 原句有 be','be 可以直接構成否定句與疑問句。',['否定：主詞 + am/is/are + not。','疑問：Am/Is/Are + 主詞 ...？','簡答沿用 be：Yes, she is. / No, she isn’t.'],[['She is ready. → She isn’t ready.','在 is 後加 not。'],['She is ready. → Is she ready?','把 is 移到主詞前。']]),
 section('2. 一般動詞請 do / does 幫忙','work、like、have、need 等一般動詞不能直接移到主詞前。',['I / you / we / they 使用 do。','he / she / it 使用 does。','否定：do/does not + 原形動詞。','疑問：Do/Does + 主詞 + 原形動詞？'],[['You like tea. → Do you like tea?','you 使用 do。'],['She likes tea. → Does she like tea?','likes 恢復為 like。'],['He has a car. → Does he have a car?','has 恢復為 have。']]),
 section('3. 簡短回答','簡答要沿用問句開頭的 be、do 或 does。',['Is she ready? — Yes, she is. / No, she isn’t.','Do they work here? — Yes, they do. / No, they don’t.','Does he have a bike? — Yes, he does. / No, he doesn’t.'],[['Does Amy study English? — Yes, she does.','不回答 Yes, she studies。']]),
 section('4. 一眼判斷 be 還是 do','先找原句真正的動詞。',['原句有 am/is/are，就直接使用 be。','原句只有一般動詞，才使用 do 或 does。','使用 does 後，檢查主要動詞是否恢復原形。'],[['They are busy. → Are they busy?','busy 是形容詞，前面已有 are。'],['They work hard. → Do they work hard?','work 是一般動詞。']])
],qs:[q('___ she like coffee?','Do|Does|Is|Did',1,'主詞 she 的一般動詞問句使用 Does。','does'),q('Does he ___ English?','speaks|speak|speaking|spoke',1,'does 已承擔第三人稱資訊，使用原形 speak。','原形動詞'),q('They ___ not busy today.','do|does|are|did',2,'busy 是形容詞，使用 are not。','be動詞'),q('___ you have a passport?','Are|Do|Is|Does',1,'have 是一般動詞，主詞 you 使用 Do。','have'),q('Does she ___ a car?','has|have|having|had',1,'does 後使用原形 have。','have'),q('「He plays tennis.」的否定句是？','He not plays tennis.|He doesn’t plays tennis.|He doesn’t play tennis.|He isn’t play tennis.',2,'doesn’t 後使用原形 play。','否定句'),q('「They are ready.」的疑問句是？','Do they ready?|Are they ready?|They are ready?|Is they ready?',1,'be 動詞 are 直接移到主詞前。','疑問語序'),q('—Does Amy study here? —Yes, ___.','she does|she studies|does she|she is',0,'Does 開頭的問句用 does 簡答。','簡短回答'),q('選出正確句子。','Does he has a bike?|Does he have a bike?|Is he have a bike?|Do he has a bike?',1,'he 使用 does，後接原形 have。','have'),q('He never ___ late.','arrive|arrives|is arrive|does arrives',1,'never 不改變第三人稱單數規則。','主詞與動詞一致')]});

setLesson('wh',{sections:[
 section('1. 選擇疑問詞','先確定想知道的資訊類型。',['who 人；what 事物；which 有限選擇；whose 所屬。','where 地點；when 時間；why 原因；how 方式或狀態。'],[['Why are you late? — Because the bus is late.','why 問原因。']]),
 section('2. how 的常見組合','how 可和其他字組成更明確的問句。',['how many + 可數複數；how much + 不可數或價格。','how often 問頻率；how long 問時長或長度。','how far 問距離；how old 問年齡。'],[['How long is the movie?','詢問電影有多長。'],['How often do you exercise?','詢問頻率。']]),
 section('3. 問主詞還是問受詞','who 作主詞時，不加 do / does。',['Who lives here? who 就是主詞。','Who do you know here? who 是受詞，所以使用 do。','先把未知的人放回原句位置，再決定是否需要 do / does。'],[['Who teaches this class?','who 是 teaches 的主詞。'],['Who does Mia visit on Sundays?','Mia 是主詞，who 是受詞。']])
],qs:[q('___ do you go to work? —By train.','What|How|Why|When',1,'詢問方式使用 How。','疑問詞'),q('___ lives next door?','Who does|Who|Whom do|Which does',1,'who 作主詞，不使用 does。','主詞提問'),q('Who do you ___ on Sundays?','visits|visit|visiting|visited',1,'do 後使用原形 visit。','受詞提問'),q('___ books do you have?','How much|How many|How often|How long',1,'books 是可數複數，用 How many。','數量提問'),q('___ is the movie? —Two hours.','How far|How long|How often|How many',1,'詢問時長使用 How long。','時長提問'),q('___ bag is this?','Who|Whose|Who’s|Which person',1,'Whose 表示「誰的」。','whose'),q('Where ___ she live?','do|does|is|has',1,'she 的一般動詞問句使用 does。','疑問語序'),q('___ are you late? —Because the bus is late.','How|What|Why|Where',2,'詢問原因使用 Why。','疑問詞'),q('___ is it from here to the station?','How long|How far|How often|How many',1,'詢問距離使用 How far。','距離提問'),q('選出正確問句。','Where you work?|Where do you work?|Where are you work?|Where does you work?',1,'you 的現在簡單式一般動詞問句使用 do。','疑問語序')]});

const perfectLesson=COURSE.find(c=>c.id==='perfect');
Object.assign(COURSE.find(c=>c.id==='present'),{examples:[['She walks to school every day.','習慣'],['Water boils at 100°C.','事實'],['She has a bike.','擁有']],words:[['habit','n. 習慣'],['routine','n. 日常規律'],['fact','n. 事實'],['frequency','n. 頻率']]});
Object.assign(COURSE.find(c=>c.id==='questions'),{examples:[['Is she ready?','be 動詞直接移到主詞前'],['Does he work here?','does + 主詞 + 原形動詞'],['Does she have a bike?','has 恢復為 have']],words:[['auxiliary','n. 助動詞'],['negative','adj. 否定的'],['affirmative','adj. 肯定的'],['short answer','n. 簡短回答']]});
Object.assign(COURSE.find(c=>c.id==='wh'),{examples:[['Where does she live?','詢問地點'],['Who lives here?','who 作主詞'],['Who do you know?','who 作受詞']],words:[['where','adv. 哪裡'],['why','adv. 為什麼'],['whose','pron. 誰的'],['how often','多久一次']]});
perfectLesson.rules.push('have got 可表示「擁有」；疑問句把 have / has 移到主詞前。');
perfectLesson.sections.push(section('4. have got 表示擁有','形式看似完成式，但這裡的意思相當於現在式 have。',['肯定：I / you / we / they have got；he / she / it has got。','否定：haven’t got / hasn’t got。','疑問：Have / Has + 主詞 + got ...？','have got 不再搭配 do / does；普通 have 才說 Do you have...?'],[['I have got a bike. → Have you got a bike?','have 直接移到主詞前。'],['She has got a car. → Has she got a car?','has 直接移到主詞前。'],['Do you have a bike?','普通 have 使用 do，意思相同。']], '不要混用兩套形式：不說 Does she have got...?'));
perfectLesson.qs.push(q('___ you got a passport?','Do|Have|Are|Did',1,'have got 的疑問句把 Have 移到主詞前。','have got'),q('Has she ___ a car?','have|got|gets|having',1,'結構是 Has + 主詞 + got。','have got'));

// Every teaching point is followed by several examples. The additions below
// complete each section without introducing grammar from a later chapter.
const extraExamples={
 skeleton:[
  [['The children laughed.','The children 是主詞；laughed 是動詞。']],
  [],
  [['The baby sleeps.','SV：主詞＋動詞。'],['Leo is kind.','SVC：kind 是主詞補語。'],['Nora opened the window.','SVO：the window 是受詞。']],
  [['We painted the wall blue.','blue 說明受詞 the wall 的狀態。']],
  [['It is a quiet room.','quiet 是形容詞，修飾 room。'],['He speaks slowly.','slowly 是副詞，修飾 speaks。']]
 ],
 'be-there-have':[
  [['Mia and Leo are ready.','兩個人構成複數主詞，所以用 are。']],
  [['The room is warm.','warm 是形容詞，說明房間的狀態。']],
  []
 ],
 nouns:[
  [['three apples / some rice','apples 可數；rice 不可數。']],
  [['She is an engineer.','engineer 以母音音素開頭，用 an。'],['Please close the door.','雙方都知道是哪一扇門，用 the。']],
  [['We have many books.','many 後接可數複數。']],
  [['Children need sleep.','泛指所有兒童與一般概念時不用冠詞。']]
 ],
 pronouns:[
  [['He knows her.','He 是主格；her 是受格。']],
  [['Your coat is here; mine is there.','your 後接名詞；mine 獨立使用。']],
  [['I cut myself.','I 與 myself 指同一個人。']],
  [['Those are the teachers’ books.','those 接複數；teachers’ 表示多位老師共有。']]
 ],
 present:[
  [['They play tennis on Saturdays.','重複發生的習慣。'],['The museum opens at ten.','固定時刻表。']],
  [['She goes home at five.','go 以 o 結尾，第三人稱單數用 goes。']],
  [],
  [['I sometimes cook dinner.','sometimes 放在一般動詞 cook 前。'],['Tom is never late.','never 放在 be 動詞 is 後。']]
 ],
 questions:[
  [['They are busy. → They aren’t busy.','be 的否定直接加 not。']],
  [],
  [['Is Tom at home? — No, he isn’t.','Is 問句用 is / isn’t 簡答。'],['Do you need help? — Yes, I do.','Do 問句用 do / don’t 簡答。']],
  [['Mia likes music. → Does Mia like music?','一般動詞問句使用 does，likes 變回 like。']]
 ],
 wh:[
  [['Where do they work? — In Taipei.','where 詢問地點。'],['When does class start? — At nine.','when 詢問時間。']],
  [['How much is this bag?','how much 可詢問價格。']],
  [['Who called Mia?','who 是動作執行者，所以不加 do / does。']]
 ],
 'present-cont':[
  [['She is making lunch.','make 去 e，再加 -ing。']],
  [['The children are playing now.','now 表示此刻正在發生。']],
  [['He usually walks, but today he is driving.','通常的習慣與今天的臨時動作形成對比。']]
 ],
 adjadv:[
  [['The music sounds beautiful.','sound 是感官連綴動詞，後接形容詞 beautiful。'],['This coffee tastes bitter.','taste 是連綴動詞，bitter 說明 coffee。'],['The towel feels soft.','feel 是連綴動詞，soft 說明 towel。'],['The cake smells wonderful.','smell 是連綴動詞，wonderful 說明 cake。'],['You look happy.','look 是連綴動詞，happy 說明 you。']],
  [['I am interested in history.','人感到有興趣，用 interested。'],['History is interesting.','事物引起興趣，用 interesting。']],
  [['Leo is taller than Sam.','兩者比較使用 taller than。'],['Mia is the tallest student in the class.','在一個範圍內最高，用 the tallest。']]
 ],
 prepositions:[
  [['We travel in summer.','季節前使用 in。']],
  [['The children are in the classroom.','在空間內部使用 in。']],
  [['She walked across the road.','across 表示從一邊到另一邊。']]
 ],
 past:[
  [['She worked yesterday.','規則動詞 work 加 -ed。'],['They went home early.','go 的過去式是不規則形式 went。']],
  [['He didn’t see the message.','didn’t 後使用原形 see。']],
  [['First we ate, then we watched a film.','first 和 then 標示先後順序。'],['Finally, they returned home.','finally 引出最後一個事件。']],
  [['She didn’t use to drink coffee.','否定句用 didn’t use to。']]
 ],
 'past-cont':[
  [['She wasn’t sleeping at eleven.','否定在 was 後加 not。']],
  [['I was cooking when the doorbell rang.','cooking 是背景；rang 是短事件。'],['While they were walking, it began to rain.','walking 是持續背景；began 是事件。']],
  [['I was reading while he was writing.','兩個動作在同一段過去時間持續。'],['While the children were playing, their parents were talking.','兩個過程同時進行。']]
 ],
 future:[
  [['I’ll carry that bag for you.','說話當下作出的決定。'],['I think it will be sunny.','沒有眼前證據的一般預測。']],
  [['We are going to visit Tainan.','已經有的計畫或意圖。'],['Watch out! You are going to fall.','根據眼前跡象作預測。']],
  [['The train leaves at 6:30 tomorrow.','固定時刻表用現在簡單式。']]
 ],
 modals:[
  [['He can drive.','情態助動詞 can 後用原形 drive。'],['She might not come.','否定直接在情態助動詞後加 not。']],
  [['Could I use your phone?','could 用來禮貌地請求許可。'],['We must wear seat belts.','must 表示強烈義務。']],
  [['That can’t be true.','can’t be 表示認為不可能。']],
  [['Let’s take the bus.','Let’s + 原形表示共同建議。']]
 ],
 perfect:[
  [['They have written three emails.','they 使用 have；write 的過去分詞是 written。'],['He has gone home.','he 使用 has；go 的過去分詞是 gone。']],
  [['I have visited Japan twice.','表示截至現在的人生經歷。'],['We have known each other for ten years.','狀態從過去持續到現在。']],
  [['She finished the report last night.','last night 是已結束的明確過去。']],
  []
 ],
 nonfinite:[
  [['We plan to leave early.','plan 後接 to do。'],['She studies hard to pass the exam.','to pass 表示目的。']],
  [['He enjoys cooking.','enjoy 後接 doing。'],['Thank you for helping me.','介系詞 for 後接 doing。']],
  [['Remember to lock the door.','記得要去做尚未完成的事。'],['I remember locking the door.','記得曾經做過這件事。']]
 ],
 clauses:[
  [['Mia cooked and Leo washed the dishes.','and 連接新增資訊。'],['I was tired, but I kept working.','but 連接轉折資訊。']],
  [['We stayed inside because it was cold.','because 後接完整原因子句。'],['Because of the rain, we stayed inside.','because of 後接名詞片語。']],
  [['If she calls, I will tell her.','可能發生的未來情況使用第一條件句。']]
 ],
 passive:[
  [['The road was closed.','重點是道路的狀態，不必說明誰關閉它。'],['The results will be announced tomorrow.','執行者不重要，焦點在結果。']],
  [['The room was cleaned yesterday.','過去式被動：was + cleaned。'],['The work has been finished.','完成式被動：has been + finished。']],
  [['Someone stole my bike. → My bike was stolen.','原來的受詞 my bike 成為被動句主詞。'],['Mia writes the report. → The report is written by Mia.','依原時態使用 is，再加過去分詞 written。']]
 ],
 relative:[
  [['I know the woman whose car was stolen.','whose 表示 car 屬於那位女性。']],
  [['The song (that) we heard was beautiful.','that 作 heard 的受詞，可以省略。']],
  [['Could you tell me when the bus leaves?','間接問句使用 the bus leaves 的直述句語序。']]
 ]
};
Object.entries(extraExamples).forEach(([id,groups])=>{
 const lesson=COURSE.find(c=>c.id===id);
 groups.forEach((items,index)=>{if(items.length)lesson.sections[index].examples.push(...items)});
});

// Final progression: concrete A1 patterns first, then A2 tense contrasts, then early-B1 expansion.
const order=['skeleton','be-there-have','nouns','pronouns','present','questions','wh','present-cont','adjadv','prepositions','past','past-cont','future','modals','perfect','nonfinite','clauses','passive','relative'];
const added=[beThereHave,pronouns,presentContinuous,prepositions,pastContinuous,relative];
added.forEach(c=>{if(!COURSE.some(x=>x.id===c.id))COURSE.push(c)});
const phaseMap={skeleton:'階段一 · A1 句子基礎','be-there-have':'階段一 · A1 句子基礎',nouns:'階段一 · A1 句子基礎',pronouns:'階段一 · A1 句子基礎',present:'階段二 · A1 日常表達',questions:'階段二 · A1 日常表達',wh:'階段二 · A1 日常表達','present-cont':'階段二 · A1 日常表達',adjadv:'階段三 · A1–A2 描述世界',prepositions:'階段三 · A1–A2 描述世界',past:'階段四 · A2 時間與經歷','past-cont':'階段四 · A2 時間與經歷',future:'階段四 · A2 時間與經歷',modals:'階段五 · A2 功能表達',perfect:'階段五 · A2 功能表達',nonfinite:'階段五 · A2 功能表達',clauses:'階段六 · A2–B1 連接與延伸應用',passive:'階段六 · A2–B1 連接與延伸應用',relative:'階段六 · A2–B1 連接與延伸應用'};
const ordered=order.map(id=>COURSE.find(c=>c.id===id));
COURSE.splice(0,COURSE.length,...ordered);
COURSE.forEach((c,i)=>{c.no=String(i+1).padStart(2,'0');c.phase=phaseMap[c.id];if(!c.level||!c.level.match(/A\d/))c.level=i<8?'A1':i<16?'A2':'A2–B1'});
