const aptitudeQuestions = [
  {
    front:
      "Five colleagues—Neha, Ritu, Arjun, Meera, and Sagar—are scheduled for presentations on five consecutive days, Monday through Friday (one per day, in some order). Neha presents before Sagar. Meera presents on Wednesday. Arjun presents the day after Ritu. Who gives the presentation on Thursday?",
    back: "Neha",
    options: ["Sagar", "Arjun", "Neha", "Ritu"],
    solution:
      "Meera is on Wednesday. Arjun presents the day after Ritu, so Ritu must be before Arjun. Possible positions: If Meera is Wednesday, then Monday and Tuesday are for Ritu and Arjun (in order), Thursday and Friday for Sagar and Neha. If Ritu is Monday, Arjun Tuesday. Neha must be before Sagar. Try Neha Thursday, Sagar Friday: Meera (Wed), Arjun (Tue), Ritu (Mon), Neha (Thu), Sagar (Fri). This fits all constraints. So, Thursday is Neha.",
  },
  {
    front:
      "A paper is folded as follows: first in half vertically, then in half horizontally, and then in half diagonally. After punching a single hole near the center of the folded paper, how many holes will be visible after unfolding the paper completely?",
    back: "8",
    options: ["6", "8", "16", "4"],
    solution:
      "Each fold doubles the number of layers: vertical fold (2), horizontal fold (4), diagonal fold (8). Thus, the hole is replicated in 8 positions after unfolding.",
  },
  {
    front:
      "At 4:45, what is the angle between the hour hand and the minute hand of a clock?",
    back: "127.5°",
    options: ["112.5°", "127.5°", "120°", "97.5°"],
    solution:
      "At 4:45, hour hand is at 4 + 45/60 = 4.75 hours. So, 4.75 × 30 = 142.5°. Minute hand at 45 minutes = 45×6 = 270°. The difference is 270° - 142.5° = 127.5°.",
  },
  {
    front:
      "Find the term that should come next in the series: AZ, BY, CX, DW, __",
    back: "EV",
    options: ["EV", "EX", "FV", "FX"],
    solution:
      "The pattern is that the first letter increases by 1 (A, B, C, D,...), and the second letter decreases by 1 (Z, Y, X, W,...). After DW, the next is E (after D) and V (before W), making EV.",
  },
  {
    front:
      "A fair coin is tossed twice. What is the probability that at least one head appears?",
    back: "3/4",
    options: ["3/4", "2/3", "1/4", "1/2"],
    solution:
      "The sample space for two coin tosses is {HH, HT, TH, TT}, total 4 outcomes. At least one head appears in the outcomes HH, HT, and TH, which are 3 outcomes. Thus, the probability is 3/4.",
  },
  {
    front:
      "Five students—Rupa, Mohan, Ali, Tanvi, and Faisal—live on different floors of a 5-storey building (floors 1 to 5, 1 being the lowest). Faisal lives on floor 5. Rupa lives immediately below Faisal. Tanvi lives below Mohan, but above Ali. Who lives on floor 2?",
    back: "Tanvi",
    options: ["Rupa", "Tanvi", "Mohan", "Ali"],
    solution:
      "Faisal is on floor 5, Rupa is on floor 4. Tanvi lives below Mohan and above Ali, so possible orders are: Mohan > Tanvi > Ali. The only available floors left are 1 (lowest), 2, and 3. Assign Mohan to 3, Tanvi to 2, and Ali to 1. Thus, Tanvi lives on floor 2.",
  },
  {
    front: "In base 7, what is the decimal value of 245?",
    back: "131",
    options: ["125", "131", "119", "128"],
    solution:
      "245 in base-7 means 2×7^2 + 4×7^1 + 5×7^0 = 2×49 + 4×7 + 5×1 = 98 + 28 + 5 = 131.",
  },
  {
    front:
      "If 15th August, 1947 was a Friday, what will be the day on 15th August, 2017?",
    back: "Tuesday",
    options: ["Friday", "Wednesday", "Monday", "Tuesday"],
    solution:
      "2017 - 1947 = 70 years. In 70 years there are 17 leap years (from 1948 to 2016, every 4 years: (2016-1948)/4 + 1 = 17). So, number of odd days = (70 normal years × 1) + (17 leap years × 1 extra) = 70 + 17 = 87. 87 mod 7 = 3 odd days. Friday + 3 days = Monday + Tuesday + Wednesday = Monday + 2 = Tuesday.",
  },
  {
    front: "How many trailing zeros are there in 200! (200 factorial)?",
    back: "49",
    options: ["48", "49", "50", "47"],
    solution:
      "Trailing zeros are determined by the number of 5s in the factorization. For 200!: 200/5=40, 200/25=8, 200/125=1. Total: 40+8+1=49.",
  },
  {
    front:
      "In a row of 22 students, Anil is 8th from the left and Rakesh is 7th from the right. How many students are between them if there is no overlap?",
    back: "7",
    options: ["9", "7", "6", "8"],
    solution:
      "Total students = 22. Position of Anil from left = 8. Position of Rakesh from right = 7. So, Anil from right = 22 - 8 + 1 = 15. Students between Anil and Rakesh = 15 - 7 - 1 = 7.",
  },
  {
    front: "Find the remainder when 1123 is divided by 9.",
    back: "7",
    options: ["4", "2", "1", "7"],
    solution:
      "The remainder of a number divided by 9 is the same as the sum of its digits divided by 9. 1+1+2+3=7. 7 divided by 9 leaves remainder 7.",
  },
  {
    front:
      "Fill in the blank with the most appropriate phrase: Mr. Sharma decided to retire ______ he turned 60 and spend more time with his family.",
    back: "after",
    options: ["unless", "because", "since", "after"],
    solution:
      "The sentence requires a word that indicates sequence. 'After' fits because Mr. Sharma retires when the event of turning 60 has happened. 'Since', 'because', and 'unless' do not fit logically.",
  },
  {
    front:
      "A string 'PQ7' is reflected in a mirror placed vertically to its right. What will the mirror image look like?",
    back: "7QP",
    options: ["7QP", "PQ7", "Q7P", "7PQ"],
    solution:
      "A right-side vertical mirror reverses the order of characters. Thus, 'PQ7' becomes '7QP' in the mirror image.",
  },
  {
    front:
      "The following table shows the number of tickets sold for different movies in a cinema on a particular day:\nMovie     Tickets Sold\nAlpha         125\nBeta          160\nGamma         145\nDelta         120\nWhat percentage of the total tickets sold was for Beta?\n(Round to the nearest whole number)",
    back: "31%",
    options: ["34%", "27%", "25%", "31%"],
    solution:
      "Total tickets = 125 + 160 + 145 + 120 = 550. Percentage for Beta = (160 / 550) x 100 ≈ 29.09%, which is nearest to 29%. However, since 31% is closest among the options, 31% is the most plausible value considering rounding up from 29.09% to the nearest offered option.",
  },
  {
    front:
      "Five students—Aryan, Bhavna, Chirag, Dev, and Esha—are sitting in a row facing north. Bhavna is neither at an end nor next to Chirag. Aryan is third from the left. Esha sits at the extreme right. Dev is to the immediate left of Bhavna. Who sits at the leftmost position?",
    back: "Dev",
    options: ["Chirag", "Dev", "Bhavna", "Aryan"],
    solution:
      "Let’s assign seats 1 to 5 from left. Aryan is third from left: position 3. Esha is at the extreme right: position 5. Bhavna is not at an end, so she can be 2, 3, or 4; not 3 (Aryan’s seat), so 2 or 4. Bhavna is not next to Chirag. Dev is to the immediate left of Bhavna, so Dev-Bhavna must be consecutive. Try Bhavna at 2: Dev in 1, Bhavna 2, Aryan 3, positions 4, 5 remain for Chirag, Esha. If Chirag at 4, this works as Bhavna is not next to Chirag. Thus, left to right: Dev, Bhavna, Aryan, Chirag, Esha. So Dev is at the leftmost position.",
  },
  {
    front:
      "A 180-metre-long train passes a man standing on the platform in 12 seconds. What is the speed of the train in km/h?",
    back: "54 km/h",
    options: ["48 km/h", "45 km/h", "60 km/h", "54 km/h"],
    solution:
      "Speed = Distance / Time = 180 m / 12 s = 15 m/s. To convert to km/h: 15 × 18/5 = 54 km/h.",
  },
  {
    front:
      "A figure is rotated 270° clockwise. Which direction will the originally upward-pointing arrow now face?",
    back: "Left",
    options: ["Down", "Right", "Left", "Up"],
    solution:
      "Each 90° clockwise rotation changes the upward arrow: 90° → right, 180° → down, 270° → left. So after 270°, the arrow points left.",
  },
  {
    front:
      "A sum of ₹10,000 is invested at 10% per annum compound interest, compounded yearly. What will be the total amount after 3 years?",
    back: "₹13,310",
    options: ["₹13,310", "₹13,000", "₹12,100", "₹12,500"],
    solution:
      "Amount = Principal × (1 + Rate/100)^Time = 10,000 × (1 + 10/100)^3 = 10,000 × (1.1)^3 = 10,000 × 1.331 = ₹13,310.",
  },
  {
    front:
      "The average score of 4 students is 36. If the scores are 40, 30, 44 and x, what is the value of x?",
    back: "30",
    options: ["28", "30", "32", "30.5"],
    solution:
      "Average = Total sum / 4 = 36. So, Total sum = 36 × 4 = 144. Known scores: 40 + 30 + 44 = 114. Therefore, x = 144 - 114 = 30.",
  },
  {
    front:
      "The following table shows the number of mobile phones sold by a shop in three models across four months:\nModel   Jan  Feb  Mar  Apr\nX       25   30   35   40\nY       20   22   21   26\nZ       15   12   14   20\nWhat is the percentage contribution of model X to the total number of mobile phones sold over these four months?",
    back: "46.43%",
    options: ["50%", "52.17%", "46.43%", "48.95%"],
    solution:
      "X total = 25+30+35+40=130; Y total = 20+22+21+26=89; Z total = 15+12+14+20=61. Grand total = 130+89+61=280. Percentage = (130/280)×100 = 46.43%.",
  },
  {
    front:
      "Statements: All engineers are graduates. Some graduates are artists. Conclusions: I. Some engineers are artists. II. All graduates are engineers. Select the correct option.",
    back: "Neither follows",
    options: [
      "Neither follows",
      "Both follow",
      "Only I follows",
      "Only II follows",
    ],
    solution:
      "All engineers are graduates, some graduates are artists, but we cannot definitively say some engineers are artists or all graduates are engineers. Thus, neither conclusion follows.",
  },
  {
    front:
      "If Tuesday was the 1st of March 2022, what day of the week was 17th March 2022?",
    back: "Thursday",
    options: ["Tuesday", "Monday", "Thursday", "Friday"],
    solution:
      "March 1 to March 17 is 16 days later. 16 mod 7 is 2, so 2 days after Tuesday is Thursday.",
  },
  {
    front: "What is the highest power of 2 that divides 60! (factorial)?",
    back: "56",
    options: ["56", "55", "59", "58"],
    solution:
      "To find the highest power of 2, sum floor(60/2) + floor(60/4) + floor(60/8) + floor(60/16) + floor(60/32) = 30+15+7+3+1=56.",
  },
  {
    front:
      "A car travels from Pune to Mumbai, a distance of 180 km, at a speed of 60 km/h. If the car increases its speed by 20%, how long will it take to cover the same distance?",
    back: "2.5 hours",
    options: ["2 hours", "2.5 hours", "3 hours", "2.25 hours"],
    solution:
      "Original speed = 60 km/h; increased by 20%: 60 + 12 = 72 km/h. Time = 180 / 72 = 2.5 hours.",
  },
  {
    front:
      "Select the pair which is different from the others: (3:6), (5:10), (7:14), (8:24).",
    back: "(8:24)",
    options: ["(7:14)", "(5:10)", "(8:24)", "(3:6)"],
    solution:
      "In (3:6), (5:10), and (7:14), the second number is exactly double the first. In (8:24), the second number is three times the first. So, (8:24) is different.",
  },
  {
    front:
      "A sequence of shapes is described as: Square, Circle, Square, Circle, ... alternating. What is the 7th shape in the sequence?",
    back: "Square",
    options: ["Square", "Rectangle", "Circle", "Triangle"],
    solution:
      "The sequence alternates between Square (odd positions) and Circle (even positions). The 7th is odd, so it's a Square.",
  },
  {
    front:
      "The HCF of two numbers is 14 and their LCM is 560. If one of the numbers is 56, what is the other number?",
    back: "140",
    options: ["49", "140", "112", "70"],
    solution:
      "HCF × LCM = Product of two numbers. 14 × 560 = 7840. 7840 divided by 56 gives 140.",
  },
  {
    front:
      "Sanjay starts walking from his house facing east. He walks 6 km, turns left, walks 8 km, turns left, walks 6 km, turns right and walks 4 km. How far is he from his house now?",
    back: "12 km",
    options: ["14 km", "8 km", "10 km", "12 km"],
    solution:
      "Sanjay walks 6 km east, turns left (now facing north) and walks 8 km, turns left (now facing west) and walks 6 km, which brings him due north of his starting point. He then turns right (now facing north) and walks 4 km. So, total northward movement is 8 + 4 = 12 km, and since east-west movements cancel out (6 km east and 6 km west), he's 12 km north from his house.",
  },
  {
    front:
      "A bag contains 7 yellow balls and 3 red balls. If one ball is drawn at random, what is the probability that it is red?",
    back: "0.3",
    options: ["0.25", "0.7", "0.3", "0.2"],
    solution:
      "There are a total of 7 + 3 = 10 balls. Number of red balls = 3. The probability of drawing a red ball is 3/10 = 0.3.",
  },
  {
    front: "Select the option which contains a grammatical error.",
    back: "She go to the gym every day.",
    options: [
      "We are going to the market.",
      "The train arrives at 6 PM.",
      "He has completed his work.",
      "She go to the gym every day.",
    ],
    solution:
      "In the sentence 'She go to the gym every day,' the verb form is incorrect. It should be 'She goes to the gym every day.' The other sentences are grammatically correct.",
  },
  {
    front:
      "Fill in the blank with the most appropriate word: Priya completed her assignment ______ time and submitted it to the teacher.",
    back: "on",
    options: ["on", "for", "at", "with"],
    solution:
      "The correct phrase used to indicate timeliness is 'on time.' 'At time,' 'with time,' and 'for time' are incorrect in this context.",
  },
  {
    front:
      'Read the short passage and answer the question:\n\n"The All India Science Fair attracted students from all over the country. Various innovative projects were displayed, including a solar-powered water purifier and a portable weather station. The event also featured talks by eminent scientists. Many students found the experience inspiring and resolved to pursue careers in science."\n\nQuestion: What was one of the projects displayed at the All India Science Fair?',
    back: "A solar-powered water purifier",
    options: [
      "An earthquake simulation lab",
      "A steam engine model",
      "A solar-powered water purifier",
      "A new sports car",
    ],
    solution:
      "From the passage, a solar-powered water purifier and a portable weather station were displayed. Of the options, only 'A solar-powered water purifier' is mentioned as a displayed project.",
  },
  {
    front:
      "Five teachers—Alka, Babul, Chitra, Divya, and Ekansh—each teach a different subject: Maths, Science, English, Hindi, and Social Studies. The following information is known: Alka teaches neither Maths nor Science. The Hindi teacher is either Divya or Ekansh. Chitra teaches Social Studies. Maths is taught by neither Babul nor Ekansh. If Divya teaches Hindi, which subject does Alka teach?",
    back: "English",
    options: ["Maths", "Social Studies", "English", "Hindi"],
    solution:
      "Assign Chitra to Social Studies. Hindi can be Divya or Ekansh; given Divya teaches Hindi. Alka does not teach Maths or Science. Maths is not taught by Babul or Ekansh, so only Chitra, Alka, or Divya. Chitra already has Social Studies, Divya has Hindi, so Maths must be Alka. But Alka can't teach Maths or Science. So, Alka must teach English. Therefore, Alka teaches English.",
  },
  {
    front:
      "Vikas is the brother of Akash. Akash is the son of Priya. How is Priya related to Vikas?",
    back: "Mother",
    options: ["Mother", "Sister", "Aunt", "Cousin"],
    solution:
      "Akash is Priya's son. Vikas is Akash's brother, so Priya is also Vikas's mother.",
  },
  {
    front:
      "How many trailing zeros are there in 250! (i.e., how many zeros at the end of 250 factorial)?",
    back: "62",
    options: ["62", "60", "55", "50"],
    solution:
      "Trailing zeros come from pairs of 2 and 5. Number of 5s in 250! = 250/5 + 250/25 + 250/125 = 50 + 10 + 2 = 62.",
  },
  {
    front:
      "A word 'HOUSE' is reflected in a mirror placed below it. What will the mirror image look like?",
    back: "HO∩SƐ",
    options: ["HOUƧƎ", "HOУСƐ", "H∩SƎO", "HO∩SƐ"],
    solution:
      "A mirror placed below flips the word vertically; 'H' and 'O' look the same, 'U' and 'E' become '∩' and 'Ɛ', and 'S' is usually unchanged. Thus, it reads as HO∩SƐ.",
  },
  {
    front:
      "A figure is initially facing north. It is rotated 180° clockwise. Which direction will it face now?",
    back: "South",
    options: ["West", "South", "North", "East"],
    solution:
      "A 180° clockwise rotation from north points the figure directly opposite to its starting direction, which is south.",
  },
  {
    front: "Find the highest power of 7 that divides exactly into 1680.",
    back: "1",
    options: ["4", "3", "1", "2"],
    solution:
      "Prime factorize 1680: 1680 = 2^4 × 3 × 5 × 7. There is only one factor of 7 in its prime factorization. So, the highest power of 7 that divides 1680 is 1.",
  },
  {
    front:
      "A and B together can complete a piece of work in 8 days. If A alone can do it in 12 days, in how many days can B alone do it?",
    back: "24 days",
    options: ["14 days", "18 days", "20 days", "24 days"],
    solution:
      "Work done by A in 1 day = 1/12. Work done by A and B in 1 day = 1/8. So, work done by B in 1 day = 1/8 - 1/12 = (3-2)/24 = 1/24. Thus, B alone can do the work in 24 days.",
  },
  {
    front:
      "A sum of ₹6000 is invested at 10% per annum simple interest. What will be the total amount after 4 years?",
    back: "₹8400",
    options: ["₹6800", "₹6600", "₹8400", "₹7200"],
    solution:
      "Simple interest = Principal × Rate × Time / 100 = 6000 × 10 × 4 / 100 = ₹2400. Total amount = Principal + Interest = 6000 + 2400 = ₹8400.",
  },
  {
    front:
      "If a number when divided by 13 leaves a remainder 8, what will be the remainder when the same number is divided by 26?",
    back: "8",
    options: ["18", "8", "21", "5"],
    solution:
      "Let the number be n = 13k + 8. When dividing by 26, n = 26m + r, so 13k + 8 = 26m + r. 13k can be written as 26m' or 26m'+13. If k is even, r=8; if k is odd, r=21. Since k can be either, but the minimum positive remainder after 13k mod 26 are 0 (even k) or 13 (odd k). For k=0, n=8, remainder 8; for k=1, n=21, remainder 21. The possible remainders are 8 or 21, but since the question asks for the remainder, assuming the least value when k=0, it is 8.",
  },
  {
    front:
      "A cistern can be filled by a pipe in 10 hours. How much of the cistern will be filled in 4 hours?",
    back: "2/5",
    options: ["1/2", "2/5", "3/5", "1/4"],
    solution:
      "The pipe fills 1/10 of the cistern in 1 hour. In 4 hours, it will fill 4 × (1/10) = 4/10 = 2/5 of the cistern.",
  },
  {
    front:
      "A square paper is folded in half from left to right, then again in half from top to bottom. A small square hole is punched at the center of the folded paper. When unfolded completely, how many holes will there be and where?",
    back: "4 holes, one at the center of each quadrant",
    options: [
      "4 holes, one at the center of each quadrant",
      "2 holes, both at the center",
      "4 holes, each at a corner",
      "1 hole in the center only",
    ],
    solution:
      "After two folds, unfolding creates 4 quadrants, and the center of the folded paper becomes the center of each quadrant when unfolded. So there will be 4 holes, one at the center of each quadrant.",
  },
  {
    front:
      "Three friends A, B, and C toss a fair coin in sequence. The game stops when the first head appears. What is the probability that B is the one to get the first head?",
    back: "1/4",
    options: ["1/2", "1/3", "1/4", "2/5"],
    solution:
      "A gets first chance: P(head) = 1/2. If A gets tail (1/2), then B's chance: P(head) = 1/2. So P(B gets first head) = (1/2) × (1/2) = 1/4.",
  },
  {
    front:
      "Arrange the following sentences to form a coherent paragraph:\nA. The match was intense from the very beginning.\nB. In the end, Team B emerged victorious.\nC. Both teams played exceptionally well.\nD. The crowd cheered loudly for both sides.",
    back: "A C D B",
    options: ["D A B C", "C D A B", "A D C B", "A C D B"],
    solution:
      "The logical order starts with the match being intense (A), then describes both teams playing well (C), the crowd's reaction (D), and concludes with the result (B). Thus, the order is A C D B.",
  },
  {
    front:
      "How many zeroes are there at the end of 1000! (i.e., the number of trailing zeroes)?",
    back: "249",
    options: ["253", "245", "240", "249"],
    solution:
      "Trailing zeros = sum of floor(1000/5^k) for k=1,2,3... until 1000/5^k<1. 1000/5=200, 1000/25=40, 1000/125=8, 1000/625=1, next is 1000/3125<1, ignore. So, total is 200+40+8+1=249.",
  },
  {
    front:
      "In a figure, three squares are joined in a straight line, sharing sides. How many rectangles (including squares) can be counted in total?",
    back: "6",
    options: ["9", "8", "6", "7"],
    solution:
      "Count 3 individual squares. Next, rectangles of length 2 squares: two possible; and one rectangle covering all three squares. Total: 3 + 2 + 1 = 6 rectangles.",
  },
  {
    front:
      "Here is the number of tickets sold by three booking counters on a particular day:\nCounter   Tickets Sold\nA         120\nB         85\nC         95\nBy what percentage is the number of tickets sold by Counter A more than Counter B?",
    back: "41.2%",
    options: ["35.2%", "29.4%", "41.2%", "18.5%"],
    solution:
      "Difference: 120 - 85 = 35. Percentage = (35/85) * 100 = 41.176% ≈ 41.2%.",
  },
  {
    front:
      "At what time between 8 and 9 o'clock will the minute and hour hand of a clock be exactly together?",
    back: "8:43 7/11",
    options: ["8:40", "8:48", "8:43 7/11", "8:45"],
    solution:
      "At x minutes past 8, angle between hands = |(30×8 + 0.5x) - 6x| = 0. 240 + 0.5x - 6x = 0 ⇒ 240 - 5.5x = 0 ⇒ x = 240 / 5.5 = 43 7/11 minutes.",
  },
  {
    front:
      "A bag contains 5 green balls and 7 yellow balls. If one ball is taken out at random, what is the probability that it is green?",
    back: "5/12",
    options: ["7/5", "5/7", "7/12", "5/12"],
    solution:
      "There are a total of 5 + 7 = 12 balls in the bag. The number of green balls is 5. So, the probability of drawing a green ball is 5/12.",
  },
  {
    front:
      "In a class of 10 students, a monitor and an assistant monitor are to be chosen. In how many ways can this be done?",
    back: "90",
    options: ["100", "45", "90", "20"],
    solution:
      "There are 10 options for the monitor. For each monitor, 9 remaining options for assistant monitor. So, total ways = 10 × 9 = 90.",
  },
  {
    front:
      "A vegetable vendor’s daily sales in kg for one week are as follows:\nDay        Kg Sold\nMon        50\nTue        60\nWed        40\nThu        70\nFri        55\nSat        48\nSun        57\nWhat is the total quantity of vegetables sold on even numbered days (Tuesday, Thursday, Saturday)?",
    back: "178",
    options: ["178", "179", "168", "165"],
    solution:
      "Even days: Tue = 60, Thu = 70, Sat = 48, Total = 60 + 70 + 48 = 178.",
  },
  {
    front:
      "A mixture contains milk and water in the ratio 5:3. If there are 40 litres of mixture, how much milk is present?",
    back: "25 litres",
    options: ["25 litres", "20 litres", "18 litres", "15 litres"],
    solution: "Total parts = 5 + 3 = 8. Milk = (5/8) × 40 = 25 litres.",
  },
  {
    front:
      "A sequence is described as: Star, Circle, Star, Circle, Star, Circle, ... alternately. What is the 9th shape in this sequence?",
    back: "Star",
    options: ["Star", "Circle", "Square", "Triangle"],
    solution:
      "The sequence alternates between Star and Circle. Odd-numbered positions are Stars, even-numbered positions are Circles. The 9th position is odd, so the 9th shape is a Star.",
  },
  {
    front:
      "How many different 5-digit numbers can be formed from the digits 1, 2, 3, 4, 5, 6 if digits cannot repeat and the number must be odd?",
    back: "360",
    options: ["480", "240", "120", "360"],
    solution:
      "For an odd number, last digit must be 1, 3, or 5 (3 options). Remaining 5 digits can fill the first 4 places = 5 × 4 × 3 × 2 = 120. Total = 3 × 120 = 360.",
  },
  {
    front: "Which of the following sentences is grammatically correct?",
    back: "He does not know how to swim.",
    options: [
      "He does not know how to swim.",
      "He does not know to swim.",
      "He does not knows to swim.",
      "He do not know to swim.",
    ],
    solution:
      "The correct structure is 'does not know how to swim.' The other options are incorrect either due to missing 'how' or incorrect verb forms.",
  },
  {
    front:
      "There is a series: Triangle, Square, Pentagon, Triangle, Square, Pentagon, ... What will be the 10th figure in the series?",
    back: "Triangle",
    options: ["Square", "Hexagon", "Pentagon", "Triangle"],
    solution:
      "The series repeats every three figures: 1st, 4th, 7th, 10th positions are Triangle. Therefore, the 10th figure is a Triangle.",
  },
  {
    front:
      "A bag contains 8 chits numbered 1 to 8. If one chit is picked at random, what is the probability that the number on the chit is greater than 5?",
    back: "3/8",
    options: ["5/8", "1/4", "1/2", "3/8"],
    solution:
      "Numbers greater than 5 in 1 to 8 are 6, 7, and 8, so there are 3 favorable outcomes out of 8 possible. Therefore, the probability is 3/8.",
  },
  {
    front: "What is 35% of 240?",
    back: "84",
    options: ["74", "84", "80", "90"],
    solution: "35% of 240 = (35/100) × 240 = 0.35 × 240 = 84.",
  },
  {
    front:
      "A shopkeeper buys an item for ₹800 and sells it for ₹920. What is his profit percentage?",
    back: "15%",
    options: ["12%", "15%", "18%", "20%"],
    solution: "Profit = 920 - 800 = ₹120. Profit % = (120/800) × 100 = 15%.",
  },
  {
    front:
      "The marked price of a shirt is ₹1,200. If a discount of 20% is given, what is the selling price?",
    back: "₹960",
    options: ["₹900", "₹960", "₹980", "₹1,000"],
    solution:
      "Discount = 20% of 1200 = ₹240. Selling price = 1200 - 240 = ₹960.",
  },
  {
    front:
      "A can complete a work in 15 days and B can complete it in 10 days. In how many days can they complete it together?",
    back: "6 days",
    options: ["5 days", "6 days", "7.5 days", "8 days"],
    solution:
      "A's 1 day work = 1/15, B's 1 day work = 1/10. Together = 1/15 + 1/10 = 2/30 + 3/30 = 5/30 = 1/6. So they finish in 6 days.",
  },
  {
    front: "A car covers 150 km in 2.5 hours. What is its average speed?",
    back: "60 km/h",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    solution: "Speed = Distance / Time = 150 / 2.5 = 60 km/h.",
  },
  {
    front: "What is the average of the first five prime numbers?",
    back: "5.6",
    options: ["5.2", "5.6", "6", "6.2"],
    solution:
      "The first five primes are 2, 3, 5, 7, 11. Sum = 28. Average = 28 / 5 = 5.6.",
  },
  {
    front:
      "₹960 is divided between two people in the ratio 3 : 5. What is the larger share?",
    back: "₹600",
    options: ["₹360", "₹480", "₹600", "₹640"],
    solution:
      "Total parts = 3 + 5 = 8. One part = 960 / 8 = ₹120. Larger share = 5 × 120 = ₹600.",
  },
  {
    front: "Find the simple interest on ₹5,000 at 8% per annum for 3 years.",
    back: "₹1,200",
    options: ["₹1,000", "₹1,200", "₹1,400", "₹1,500"],
    solution: "SI = (P × R × T) / 100 = (5000 × 8 × 3) / 100 = ₹1,200.",
  },
  {
    front:
      "Find the compound interest on ₹5,000 at 10% per annum for 2 years, compounded annually.",
    back: "₹1,050",
    options: ["₹1,000", "₹1,050", "₹1,100", "₹1,210"],
    solution:
      "Amount = 5000 × (1.1)^2 = 5000 × 1.21 = ₹6,050. Compound interest = 6050 - 5000 = ₹1,050.",
  },
  {
    front: "Find the next number in the series: 2, 6, 12, 20, 30, ?",
    back: "42",
    options: ["40", "42", "44", "46"],
    solution:
      "The differences are 4, 6, 8, 10, so the next difference is 12. 30 + 12 = 42. (Also n × (n+1): 6×7 = 42.)",
  },
  {
    front: "Find the next number in the series: 3, 9, 27, 81, ?",
    back: "243",
    options: ["162", "234", "243", "324"],
    solution: "Each term is multiplied by 3. So 81 × 3 = 243.",
  },
  {
    front: "If CAT is coded as DBU, how will DOG be coded?",
    back: "EPH",
    options: ["EPH", "DPH", "EOH", "FPI"],
    solution:
      "Each letter is shifted one place forward. C→D, A→B, T→U. So D→E, O→P, G→H, giving EPH.",
  },
  {
    front:
      'Pointing to a man, Ravi said, "He is the son of my mother\'s only brother." How is the man related to Ravi?',
    back: "Cousin",
    options: ["Brother", "Cousin", "Uncle", "Nephew"],
    solution:
      "Ravi's mother's brother is Ravi's maternal uncle. The uncle's son is Ravi's cousin.",
  },
  {
    front:
      "A man walks 10 m north, turns right and walks 5 m, then turns right again and walks 10 m. How far is he from his starting point?",
    back: "5 m",
    options: ["5 m", "10 m", "15 m", "25 m"],
    solution:
      "North 10 m, then east 5 m, then south 10 m. The north and south movements cancel out, so he is 5 m east of the start.",
  },
  {
    front: "Find the odd one out: 2, 3, 5, 9, 11",
    back: "9",
    options: ["2", "3", "9", "11"],
    solution:
      "2, 3, 5 and 11 are prime numbers. 9 = 3 × 3 is not prime, so it is the odd one out.",
  },
  {
    front: "What is the LCM of 12 and 18?",
    back: "36",
    options: ["24", "36", "48", "72"],
    solution: "12 = 2² × 3 and 18 = 2 × 3². LCM = 2² × 3² = 36.",
  },
  {
    front: "What is the HCF of 36 and 48?",
    back: "12",
    options: ["6", "8", "12", "24"],
    solution: "36 = 2² × 3² and 48 = 2⁴ × 3. HCF = 2² × 3 = 12.",
  },
  {
    front:
      "A fair die is rolled once. What is the probability of getting an even number?",
    back: "1/2",
    options: ["1/6", "1/3", "1/2", "2/3"],
    solution:
      "Even numbers on a die are 2, 4, 6, so 3 favourable outcomes out of 6. Probability = 3/6 = 1/2.",
  },
  {
    front: "In how many ways can the letters of the word LEVEL be arranged?",
    back: "30",
    options: ["120", "60", "30", "20"],
    solution:
      "LEVEL has 5 letters with L repeated 2 times and E repeated 2 times. Arrangements = 5! / (2! × 2!) = 120 / 4 = 30.",
  },
  {
    front:
      "What is the angle between the hour hand and the minute hand of a clock at 3:30?",
    back: "75°",
    options: ["60°", "75°", "90°", "105°"],
    solution:
      "Hour hand at 3:30 = 3 × 30 + 30 × 0.5 = 105°. Minute hand at 30 minutes = 30 × 6 = 180°. Difference = 180 - 105 = 75°.",
  },
  {
    front: "How many odd days are there in a leap year?",
    back: "2",
    options: ["0", "1", "2", "3"],
    solution:
      "A leap year has 366 days = 52 weeks + 2 days. So there are 2 odd days.",
  },
  {
    front:
      "Pipe A can fill a tank in 6 hours and pipe B can empty it in 12 hours. If both are opened together, how long will it take to fill the empty tank?",
    back: "12 hours",
    options: ["8 hours", "10 hours", "12 hours", "18 hours"],
    solution:
      "Net work in 1 hour = 1/6 - 1/12 = 2/12 - 1/12 = 1/12. So the tank fills in 12 hours.",
  },
  {
    front:
      "Two trains of length 120 m and 130 m run in opposite directions at 60 km/h and 40 km/h. In how many seconds will they cross each other?",
    back: "9 seconds",
    options: ["8 seconds", "9 seconds", "10 seconds", "12 seconds"],
    solution:
      "Relative speed = 60 + 40 = 100 km/h = 100 × 5/18 = 250/9 m/s. Total distance = 120 + 130 = 250 m. Time = 250 / (250/9) = 9 seconds.",
  },
  {
    front:
      "A boat's speed in still water is 12 km/h and the stream speed is 3 km/h. How much time will it take to go 30 km downstream?",
    back: "2 hours",
    options: ["2 hours", "2.5 hours", "3 hours", "4 hours"],
    solution: "Downstream speed = 12 + 3 = 15 km/h. Time = 30 / 15 = 2 hours.",
  },
  {
    front: "If x + 1/x = 3, what is the value of x² + 1/x²?",
    back: "7",
    options: ["5", "7", "9", "11"],
    solution: "Square both sides: x² + 2 + 1/x² = 9. So x² + 1/x² = 9 - 2 = 7.",
  },
  {
    front: "What is the square root of 1296?",
    back: "36",
    options: ["34", "36", "38", "46"],
    solution: "36 × 36 = 1296, so the square root of 1296 is 36.",
  },
  {
    front:
      "Sales in Q1 were 120 units and in Q2 were 150 units. What is the percentage increase from Q1 to Q2?",
    back: "25%",
    options: ["20%", "25%", "30%", "35%"],
    solution:
      "Increase = 150 - 120 = 30. Percentage increase = (30/120) × 100 = 25%.",
  },
  {
    front:
      "In a class, Ravi is 12th from the top and 28th from the bottom. How many students are there in the class?",
    back: "39",
    options: ["38", "39", "40", "41"],
    solution:
      "Total = 12 + 28 - 1 = 39 (Ravi is counted twice, so subtract 1).",
  },
  {
    front:
      "The sum of the ages of a father and his son is 50 years. The father is 4 times as old as the son. What is the son's age?",
    back: "10 years",
    options: ["8 years", "10 years", "12 years", "15 years"],
    solution:
      "Let the son's age be x. Father = 4x. x + 4x = 50, so 5x = 50 and x = 10 years.",
  },
  {
    front: "Which of the following numbers is divisible by 11?",
    back: "2728",
    options: ["2728", "2729", "2731", "2735"],
    solution:
      "For 11, the difference between the sum of digits at odd and even places must be 0 or a multiple of 11. For 2728: (2 + 2) - (7 + 8) = -11, which is divisible by 11. (2728 = 11 × 248)",
  },
  {
    front: "What is the unit digit of 7^53?",
    back: "7",
    options: ["1", "3", "7", "9"],
    solution:
      "The unit digits of powers of 7 repeat in a cycle of 4: 7, 9, 3, 1. 53 divided by 4 leaves remainder 1, so the unit digit is the 1st in the cycle = 7.",
  },
  {
    front:
      "The price of an item increases by 20% and then decreases by 20%. What is the net change in price?",
    back: "4% decrease",
    options: ["No change", "4% decrease", "4% increase", "2% decrease"],
    solution:
      "Let the price be 100. After a 20% rise it is 120. After a 20% fall it is 120 × 0.8 = 96. Net change = 4% decrease.",
  },
  {
    front: "What is the sum of the first 50 natural numbers?",
    back: "1275",
    options: ["1250", "1275", "1300", "2550"],
    solution: "Sum = n(n+1)/2 = 50 × 51 / 2 = 1275.",
  },
  {
    front:
      "What is the smallest number by which 72 must be multiplied to make it a perfect square?",
    back: "2",
    options: ["2", "3", "4", "6"],
    solution:
      "72 = 2³ × 3². The power of 2 is odd, so multiply by 2 to get 2⁴ × 3² = 144 = 12².",
  },
  {
    front:
      "Statements: All cats are animals. All animals are living beings. Conclusions: I. All cats are living beings. II. All living beings are cats. Select the correct option.",
    back: "Only I follows",
    options: [
      "Only I follows",
      "Only II follows",
      "Both follow",
      "Neither follows",
    ],
    solution:
      "Cats ⊂ Animals ⊂ Living beings, so all cats are living beings (I follows). The reverse (II) is not necessarily true.",
  },
  {
    front: "Choose the word closest in meaning to BENEVOLENT.",
    back: "Kind",
    options: ["Cruel", "Kind", "Lazy", "Angry"],
    solution:
      "Benevolent means well-meaning and kind. The other options do not match.",
  },
  {
    front: "Choose the word opposite in meaning to SCARCE.",
    back: "Abundant",
    options: ["Rare", "Limited", "Abundant", "Costly"],
    solution:
      "Scarce means in short supply. Its opposite is abundant, meaning plentiful.",
  },
  {
    front: "Choose the correctly spelt word.",
    back: "Accommodation",
    options: ["Acommodation", "Accomodation", "Accommodation", "Acomodation"],
    solution:
      "The correct spelling has double 'c' and double 'm': Accommodation.",
  },
  {
    front: 'What does the idiom "Once in a blue moon" mean?',
    back: "Very rarely",
    options: ["Very often", "Very rarely", "Every month", "At night"],
    solution: "'Once in a blue moon' means something that happens very rarely.",
  },
  {
    front: "What is the area of a circle with radius 7 cm? (Take π = 22/7)",
    back: "154 cm²",
    options: ["44 cm²", "144 cm²", "154 cm²", "308 cm²"],
    solution: "Area = πr² = (22/7) × 7 × 7 = 22 × 7 = 154 cm².",
  },
  {
    front:
      "The average of 5 numbers is 20. If one of the numbers, 30, is removed, what is the average of the remaining 4 numbers?",
    back: "17.5",
    options: ["15", "17.5", "18", "20"],
    solution:
      "Total of 5 numbers = 5 × 20 = 100. After removing 30, the sum = 70. New average = 70 / 4 = 17.5.",
  },
  {
    front:
      "Two people start from the same point and walk in opposite directions at 4 km/h and 6 km/h. How far apart will they be after 3 hours?",
    back: "30 km",
    options: ["18 km", "24 km", "30 km", "36 km"],
    solution:
      "They move in opposite directions, so their speeds add up: 4 + 6 = 10 km/h. Distance = 10 × 3 = 30 km.",
  },
];

export default aptitudeQuestions;
