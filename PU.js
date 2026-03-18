function getTime() {
  const d = new Date();
  let h = d.getHours(), m = d.getMinutes().toString().padStart(2, '0');
  return `${h % 12 || 12}:${m} ${h >= 12 ? 'PM' : 'AM'}`;
}

document.getElementById('todayDiv').textContent = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

const KB = [
  {
    tags: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste', 'hii', 'helo', 'howdy', 'greetings'],
    reply: `<strong>Namaste! 🙏 Welcome to Poornima University!</strong><br><br>
I'm your 24/7 Campus Assistant. Here's what I can help with:<br><br>
<span class="tag" data-query="How to apply for admission?">📋 Admissions</span>
<span class="tag" data-query="What courses are offered?">📚 Courses</span>
<span class="tag" data-query="What is the fee structure?">💰 Fees</span>
<span class="tag" data-query="Tell me about placements">💼 Placements</span>
<span class="tag" data-query="Hostel facilities">🏠 Hostel</span>
<span class="tag" data-query="Scholarship schemes">🎖️ Scholarships</span>
<span class="tag" data-query="Contact details">📞 Contact</span><br><br>
What would you like to know? 😊` },

  {
    tags: ['about', 'poornima university', 'tell me about poornima', 'who are you', 'overview', 'history', 'established', 'founded', 'what is poornima'],
    reply: `<strong>🏛️ About Poornima University</strong><br><br>
<strong>Poornima University (PU)</strong> is a premier state-private university established in <strong>2012</strong> by the Shanti Education Society under Rajasthan State Legislature Act.<br><br>
📍 <strong>Location:</strong> IS-2027-2031, Ramchandrapura, Sitapura Extension, Jaipur – 303905<br>
🌿 <strong>Campus:</strong> 32-acre green campus blending classical and modern architecture<br>
👩‍🎓 <strong>Students:</strong> 8,000+ from across India<br>
👨‍🏫 <strong>Faculty:</strong> 500+ highly qualified members (PhDs from IITs/NITs)<br>
🌍 <strong>Global:</strong> 100+ International University Partnerships<br><br>
<strong>🏆 Accreditations:</strong><br>
• NAAC A+ Accredited<br>
• QS I-GAUGE Diamond Rating<br>
• Approved by UGC, AICTE, CoA, NCHMCT, AIU, NBA<br>
• Best Upcoming University — ASSOCHAM, New Delhi<br><br>
<em>Motto: <strong>"Your Dream, Our Goal"</strong></em>` },

  {
    tags: ['admission', 'apply', 'how to apply', 'enrollment', 'how to get admission', 'join', 'application form', 'apply online', 'admission process', 'admission 2025', 'admission 2026'],
    reply: `<strong>📋 Admission Process — Poornima University 2025–26</strong><br><br>
<strong>Step 1 — Apply Online or Offline</strong><br>
→ Visit <a href="https://poornima.edu.in" target="_blank">poornima.edu.in</a> and click "Apply Now"<br>
→ Or collect form from campus admission office<br>
<em>Application Fee: ₹1,500 (non-refundable)</em><br><br>
<strong>Step 2 — Documents Required</strong><br>
• 10th & 12th Marksheets (self-attested)<br>
• Transfer / Migration Certificate<br>
• Aadhar Card + 4 Passport-size Photos<br>
• Category Certificate (SC/ST/OBC if applicable)<br><br>
<strong>Step 3 — Selection Basis</strong><br>
• <strong>B.Tech:</strong> JEE Main score + 10+2 merit<br>
• <strong>MBA:</strong> CAT/CMAT/MAT score + Personal Interview<br>
• <strong>B.Arch:</strong> NATA score (80+ qualifies for scholarship)<br>
• <strong>BCA/BBA:</strong> 10+2 merit-based<br>
• <strong>PhD:</strong> PET Entrance + Interview (GATE/NET holders exempt from PET)<br><br>
📅 <strong>Admissions open May–July every year</strong><br>
📞 Call: <strong>8875666617 / 8875666618</strong><br>
📧 Email: <strong>admission@poornima.edu.in</strong><br>
⏰ Office: Mon–Sat, 9:00 AM – 5:00 PM` },

  {
    tags: ['eligibility', 'criteria', 'minimum marks', 'percentage', 'cutoff', 'who can apply', '12th marks', 'required marks', 'qualification'],
    reply: `<strong>✅ Eligibility Criteria</strong><br><br>
<table>
<tr><th>Program</th><th>Eligibility</th></tr>
<tr><td>B.Tech / B.E.</td><td>10+2 with PCM · Min. 50% (45% for SC/ST)</td></tr>
<tr><td>B.Arch</td><td>10+2 with Maths · 50% + NATA Score</td></tr>
<tr><td>BCA</td><td>10+2 with Maths · Min. 45%</td></tr>
<tr><td>BBA / BCom</td><td>10+2 (any stream) · Min. 45%</td></tr>
<tr><td>MBA</td><td>Graduation 50% + CAT/CMAT preferred</td></tr>
<tr><td>M.Tech</td><td>B.Tech 50% + GATE preferred</td></tr>
<tr><td>MCA</td><td>BCA or BSc CS · 50%</td></tr>
<tr><td>PhD</td><td>PG with 55% + PET (GATE/NET exempt)</td></tr>
</table><br>
⚠️ 5% relaxation for SC/ST/OBC candidates in most programs.<br><br>
<span class="tag" data-query="How to apply for admission?">📋 How to Apply</span>
<span class="tag" data-query="What is the fee structure?">💰 Fee Structure</span>` },

  {
    tags: ['courses', 'programs', 'what courses', 'course list', 'which courses', 'streams', 'available', 'btech', 'mba', 'bca', 'mca', 'programs offered', 'b.tech'],
    reply: `<strong>📚 Courses Offered — 110+ Programs</strong><br><br>
<strong>🔧 Engineering & Technology (B.Tech / M.Tech)</strong><br>
• CSE — AI & ML, Data Science, Cyber Security, Cloud Computing, IoT, Full Stack Dev<br>
• Information Technology (IT)<br>
• Electronics & Communication Engineering (ECE)<br>
• Mechanical Engineering<br>
• Civil Engineering · Electrical Engineering<br><br>
<strong>💼 Management</strong><br>
• BBA (General / International Business)<br>
• MBA — Marketing, Finance, HR, Digital Marketing, Healthcare, Entrepreneurship<br><br>
<strong>💻 Computer Applications</strong><br>
• BCA · MCA · BCA+MCA Integrated (5-year)<br><br>
<strong>🏗️ Architecture & Design</strong><br>
• B.Arch (5-year) · B.Design · M.Design<br><br>
<strong>🔬 Science & Humanities</strong><br>
• BSc (PCM, CS, Biotech) · BSc Agriculture · BA · BCom (Hons.) · B.Voc<br><br>
<strong>🏨 Hotel Management & Tourism</strong><br>
• BHMCT (Bachelor of Hotel Management & Catering Technology)<br><br>
<strong>🩺 Public Health</strong><br>
• MPH (Master of Public Health)<br><br>
<strong>🎓 Also:</strong> Diploma, Certificate, and PhD programs<br>
<em>All programs UGC / AICTE / CoA / NCHMCT approved</em>` },

  {
    tags: ['departments', 'department', 'schools', 'school of', 'cse department', 'mechanical department', 'list of departments'],
    reply: `<strong>🏛️ Schools & Departments — Poornima University</strong><br><br>
<table>
<tr><th>#</th><th>School / Department</th><th>Programs</th></tr>
<tr><td>1</td><td>School of Engineering & Technology</td><td>B.Tech (CSE, IT, ECE, Mech, Civil) · M.Tech</td></tr>
<tr><td>2</td><td>School of Management</td><td>MBA · BBA</td></tr>
<tr><td>3</td><td>School of Computer Applications</td><td>BCA · MCA · BCA+MCA</td></tr>
<tr><td>4</td><td>School of Architecture & Design</td><td>B.Arch · B.Design · M.Design</td></tr>
<tr><td>5</td><td>School of Science & Humanities</td><td>BSc · BA · BCom</td></tr>
<tr><td>6</td><td>School of Hotel Management</td><td>BHMCT</td></tr>
<tr><td>7</td><td>School of Agriculture</td><td>BSc Agriculture</td></tr>
<tr><td>8</td><td>School of Public Health</td><td>MPH</td></tr>
<tr><td>9</td><td>Dept. of First Year Engineering</td><td>Common FY for all branches</td></tr>
</table>` },

  {
    tags: ['fees', 'fee', 'tuition', 'cost', 'how much', 'fee structure', 'annual fee', 'semester fee', 'per year', 'charges', 'fee detail', 'btech fee', 'mba fee'],
    reply: `<strong>💰 Fee Structure — Annual (2025–26)</strong><br><br>
<table>
<tr><th>Program</th><th>Annual Fee</th></tr>
<tr><td>B.Tech CSE (AI/ML, Data Science, Cyber Security)</td><td>₹1,60,000</td></tr>
<tr><td>B.Tech CSE (General)</td><td>₹1,28,000 – ₹1,40,000</td></tr>
<tr><td>B.Tech IT / ECE / Mechanical / Civil</td><td>₹1,28,000 – ₹1,50,000</td></tr>
<tr><td>B.Arch</td><td>₹1,40,000 – ₹1,60,000</td></tr>
<tr><td>BCA</td><td>₹70,000 – ₹90,000</td></tr>
<tr><td>BBA / BCom Hons.</td><td>₹60,000 – ₹80,000</td></tr>
<tr><td>MBA</td><td>₹1,10,000 – ₹1,40,000</td></tr>
<tr><td>MCA</td><td>₹90,000 – ₹1,10,000</td></tr>
<tr><td>M.Tech</td><td>₹90,000 – ₹1,20,000</td></tr>
<tr><td>BHMCT</td><td>₹80,000 – ₹1,00,000</td></tr>
<tr><td>BSc / BA / BCom</td><td>₹40,000 – ₹60,000</td></tr>
</table><br>
📌 Application Fee: ₹1,500 (one-time, non-refundable)<br>
📌 Hostel & transport fees are charged separately<br>
📌 Scholarships available — up to <strong>100% fee waiver</strong> for merit students<br><br>
<span class="tag" data-query="Scholarship schemes">🎖️ Scholarships</span>
<span class="tag" data-query="Hostel facilities">🏠 Hostel Fees</span>` },

  {
    tags: ['scholarship', 'financial aid', 'waiver', 'merit scholarship', 'discount', 'free education', 'concession', 'gayatri scholarship', 'sc st scholarship', 'government scholarship'],
    reply: `<strong>🎖️ Scholarship Schemes — Poornima University</strong><br><br>
PU awards over <strong>₹3.5 Crore in scholarships</strong> every year!<br><br>
<strong>1. Shanti Education Society Scholarship</strong><br>
Based on 12th board %: <strong>5% to 50% tuition fee waiver</strong><br><br>
<strong>2. Merit Scholarship</strong><br>
• 90%+ in 12th → Up to <strong>100% tuition fee waiver</strong><br>
• 80–89% → Significant concession on fees<br>
• 70–79% → Partial concession<br><br>
<strong>3. Gayatri Girls Scholarship</strong><br>
Exclusively for girl students — encourages female participation in higher education<br><br>
<strong>4. Sports Scholarship</strong><br>
State/National level athletes receive fee concessions<br><br>
<strong>5. Government Scholarships (SC/ST/OBC/EWS)</strong><br>
Apply via: <a href="https://scholarships.gov.in" target="_blank">scholarships.gov.in</a><br>
• Category 1 → Up to <strong>100% fee reimbursement</strong><br>
• Category 2 → 50%+ waiver | Submit caste + income certificate<br><br>
<strong>6. Non-Professional Course Scholarship</strong><br>
Tuition fee reimbursement for BA, BCom, BSc students<br><br>
📅 Apply within <strong>first 30 days</strong> of admission<br>
📧 <strong>admission@poornima.edu.in</strong>` },

  {
    tags: ['hostel', 'accommodation', 'room', 'boarding', 'stay', 'hostel fee', 'mess', 'boys hostel', 'girls hostel', 'hostel facility', 'hostel available'],
    reply: `<strong>🏠 Hostel — Poornima University</strong><br><br>
PU provides accommodation for <strong>1,500+ students</strong> on campus with separate Boys & Girls hostels.<br><br>
<strong>Room Options & Annual Fees:</strong><br>
<table>
<tr><th>Room Type</th><th>Annual Fee (incl. mess)</th></tr>
<tr><td>Single Occupancy (AC)</td><td>₹1,10,000 – ₹1,15,000</td></tr>
<tr><td>Double Sharing</td><td>₹90,000 – ₹1,00,000</td></tr>
<tr><td>Triple Sharing</td><td>₹80,000 – ₹90,000</td></tr>
</table><br>
<strong>✅ Facilities Included:</strong><br>
• 24/7 CCTV Surveillance & Security<br>
• High-Speed Wi-Fi throughout<br>
• Gymnasium & Indoor Games<br>
• Mess with Veg & Non-Veg options<br>
• Laundry Services · TV Room<br>
• Medical Room on campus<br>
• Air-conditioned rooms available<br><br>
📌 Limited seats — <strong>apply during admission process</strong><br>
📞 Hostel Office: <strong>8875666617</strong>` },

  {
    tags: ['placement', 'job', 'package', 'salary', 'company', 'recruit', 'career', 'lpa', 'highest package', 'average package', 'campus recruitment', 'which companies', 'placement record'],
    reply: `<strong>💼 Placement Highlights — 2024</strong><br><br>
<table>
<tr><th>Metric</th><th>Achievement</th></tr>
<tr><td>🏆 Highest Package</td><td><strong>₹30 LPA</strong></td></tr>
<tr><td>📊 Average Package</td><td><strong>₹5.87 LPA</strong></td></tr>
<tr><td>🏢 Total Recruiters</td><td><strong>350+</strong></td></tr>
<tr><td>📄 Total Offers</td><td><strong>1,700+</strong></td></tr>
<tr><td>👩‍💼 Placed (3 years)</td><td><strong>4,500+ students</strong></td></tr>
</table><br>
<strong>🏢 Top Recruiters:</strong><br>
Microsoft · Amazon · Google · Wipro · Infosys · TCS · Deloitte · Accenture · Jio · Capgemini · HCL · Tech Mahindra · L&T · Genpact · KPMG · and 300+ more<br><br>
<strong>🎯 Pre-Placement Training:</strong><br>
• Aptitude & Reasoning (from 2nd year)<br>
• Mock Technical Interviews<br>
• Group Discussion Workshops<br>
• Resume & LinkedIn Profile Building<br>
• Campus Recruitment Training (CRT)<br><br>
📞 Placement Cell: <strong>9828510629</strong><br>
📧 <strong>tpc@poornima.edu.in</strong>` },

  {
    tags: ['facilities', 'infrastructure', 'lab', 'campus', 'sports', 'gym', 'wifi', 'canteen', 'cafeteria', 'amenities', 'library', 'observatory'],
    reply: `<strong>🏫 Campus Facilities — Poornima University</strong><br><br>
<strong>🔬 Laboratories (150+ Specialized)</strong><br>
Advanced Computer Labs (500+ systems) · Electronics & Communication Labs · Biotech & Life Sciences · Chemistry & Physics · Design Studios · Innovation & Research Labs<br><br>
<strong>📚 Central Library</strong><br>
50,000+ books · IEEE Xplore · Scopus · Web of Science · J-Gate · NPTEL · 24/7 Digital e-Library Access · 300+ seating capacity<br><br>
<strong>🏋️ Sports Complex</strong><br>
Cricket Ground · Football Field · Basketball · Volleyball · Badminton Courts · Indoor Sports Hall · Gymnasium · Swimming Pool<br><br>
<strong>🌐 Technology & Campus</strong><br>
Campus-wide High-Speed Wi-Fi · Smart Classrooms · Auditorium · Seminar Halls · ATM · Medical Room<br><br>
<strong>✨ Unique Features</strong><br>
• <strong>Observatory</strong> (rare facility!)<br>
• Advanced Studies & Research Centre (ASRC)<br>
• Solar Power Plant · Rainwater Harvesting<br>
• Green, Eco-Friendly Campus<br><br>
<strong>🍽️ Food & Services</strong><br>
Food Court / Cafeteria · Multiple cuisine options · Transport facility` },

  {
    tags: ['faculty', 'teachers', 'professors', 'staff', 'hod', 'head of department', 'qualified faculty', 'how many faculty'],
    reply: `<strong>👨‍🏫 Faculty — Poornima University</strong><br><br>
PU has <strong>500+ distinguished faculty members</strong> from premier institutes across India and globally.<br><br>
<strong>Academic Profile:</strong><br>
• PhD holders from IITs, NITs & top global universities<br>
• Industry professionals with 10–25 years experience<br>
• Faculty from 100+ international partner universities<br>
• GPTS (Global Professional Training Standards) certified<br><br>
<strong>Advisory Board:</strong><br>
80+ senior industrialists & domain experts guiding curriculum design & industry alignment<br><br>
<strong>Student Support:</strong><br>
• Open-door mentorship for every student<br>
• Research supervision & project guidance<br>
• Regular national & international conference participation<br>
• Active industry-academia collaboration<br><br>
📧 Faculty directory: <strong>info@poornima.edu.in</strong><br>
🌐 <a href="https://poornima.edu.in" target="_blank">poornima.edu.in/faculty</a>` },

  {
    tags: ['contact', 'phone number', 'email', 'address', 'reach', 'helpline', 'contact details', 'phone', 'where is', 'location', 'office', 'college address'],
    reply: `<strong>📞 Contact — Poornima University</strong><br><br>
🏫 <strong>Poornima University</strong><br>
IS-2027-2031, Ramchandrapura, P.O. Vidhani Vatika,<br>
Sitapura Extension, Jaipur, Rajasthan — <strong>303905</strong><br><br>
<table>
<tr><th>Department</th><th>Phone Number</th></tr>
<tr><td>Admissions</td><td>📞 8875666617 / 8875666618</td></tr>
<tr><td>Training & Placement</td><td>📞 9828510629</td></tr>
<tr><td>Jobs / HR Department</td><td>📞 8875666627</td></tr>
<tr><td>Alumni Services</td><td>📞 8875666645</td></tr>
<tr><td>Transport Office</td><td>📞 9829855516</td></tr>
</table><br>
📧 General: <strong>info@poornima.edu.in</strong><br>
📧 Admissions: <strong>admission@poornima.edu.in</strong><br>
📧 Placement: <strong>tpc@poornima.edu.in</strong><br>
📧 HR/Jobs: <strong>hr@poornima.edu.in</strong><br>
📧 Alumni: <strong>cas.pu@poornima.edu.in</strong><br><br>
🌐 <a href="https://poornima.edu.in" target="_blank">poornima.edu.in</a><br>
⏰ Office Hours: <strong>Monday to Saturday, 9:00 AM – 5:00 PM</strong>` },

  {
    tags: ['ranking', 'rank', 'nirf', 'naac', 'qs', 'accreditation', 'rated', 'award', 'best university', 'top university'],
    reply: `<strong>🏆 Rankings & Accreditations</strong><br><br>
<table>
<tr><th>Body / Platform</th><th>Achievement</th></tr>
<tr><td>NAAC</td><td>A+ Accredited ⭐⭐⭐⭐⭐</td></tr>
<tr><td>QS I-GAUGE</td><td>Diamond Rating 💎</td></tr>
<tr><td>ASSOCHAM</td><td>Best Upcoming University, New Delhi</td></tr>
<tr><td>Times of India</td><td>73rd Overall in India (Top 100, 2020)</td></tr>
<tr><td>TOI B.Tech Ranking</td><td>78th out of 196 (2021)</td></tr>
<tr><td>Outlook (Architecture)</td><td>14th in India</td></tr>
<tr><td>Outlook (Commerce)</td><td>120th in India</td></tr>
</table><br>
<strong>NIRF 2025 Data:</strong><br>
• B.Tech Median Salary: ₹4,50,000 per annum<br>
• MBA Median Salary: ₹5,00,000 per annum<br><br>
<strong>Regulatory Approvals:</strong><br>
UGC · AICTE · CoA · NCHMCT · AIU · NBA · ISO Certified<br>
100+ International University Partnerships` },

  {
    tags: ['events', 'fest', 'festival', 'cultural', 'technical', 'hackathon', 'seminar', 'workshop', 'annual day', 'competition', 'techfest', 'charxa', 'convocation'],
    reply: `<strong>🎉 Events & Festivals — Poornima University</strong><br><br>
<strong>🖥️ Technical Events</strong><br>
• Hackathons & Coding Competitions (year-round)<br>
• Paper Presentation & Project Expo<br>
• Robotics & IoT Challenges<br>
• National-level Seminars (every quarter)<br>
• Industry Expert Guest Lectures (monthly)<br><br>
<strong>🎭 Cultural Events</strong><br>
• <strong>Annual Cultural Fest</strong> — Dance, Music, Drama, Fashion Show, Street Play<br>
• <strong>Charxa 2025</strong> — Recently organized at PU Jaipur<br>
• Freshers' Welcome & Farewell Parties<br><br>
<strong>🎓 Academic Events</strong><br>
• Convocation Ceremony (2-phase; 834+ degrees conferred recently)<br>
• International Collaboration Events & MoU Signings<br>
• Research Colloquia & Paper Presentations<br><br>
<strong>🏆 Sports Events</strong><br>
• Annual Sports Day<br>
• Inter & Intra-college Tournaments (Cricket, Football, Athletics, Kabaddi, Chess)<br><br>
📅 Stay updated: <a href="https://poornima.edu.in" target="_blank">poornima.edu.in</a>` },

  {
    tags: ['phd', 'doctoral', 'research', 'doctorate', 'research program', 'pet exam', 'research centre', 'asrc'],
    reply: `<strong>🔬 PhD Programs — Poornima University</strong><br><br>
Research at PU is powered by the <strong>Advanced Studies & Research Centre (ASRC)</strong>.<br><br>
<strong>PhD Available In:</strong><br>
• Engineering & Technology (CSE, ECE, Mech, Civil)<br>
• Management (Marketing, Finance, HR, Operations)<br>
• Science & Humanities<br>
• Architecture & Design<br>
• Public Health<br><br>
<strong>✅ Eligibility:</strong><br>
• Post-Graduation with minimum <strong>55% marks</strong><br>
• Valid GATE / UGC NET / CSIR / SLET → <strong>Exempt from PET</strong><br><br>
<strong>📋 Admission Process:</strong><br>
1. Apply online with research proposal<br>
2. PhD Entrance Test (PET) — conducted offline<br>
3. Personal Interview with research committee<br>
4. Provisional admission letter to selected candidates<br><br>
<strong>Research Infrastructure:</strong><br>
150+ specialized labs · IEEE Xplore, Scopus, Web of Science access · International collaborations · Patent filing support<br><br>
📞 <strong>8875666617</strong> | 📧 <strong>admission@poornima.edu.in</strong>` },

  {
    tags: ['transport', 'bus', 'bus route', 'how to reach', 'distance', 'bus facility', 'pickup', 'drop', 'bus timing'],
    reply: `<strong>🚌 Transport — Poornima University</strong><br><br>
<strong>📍 Location & How to Reach:</strong><br>
• Sitapura Extension, Jaipur (near Sitapura Industrial Area)<br>
• ~20 km from Jaipur Railway Station<br>
• Auto-rickshaw, city taxi, Ola/Uber available<br>
• City Bus: Sitapura route from major stops<br><br>
<strong>🚌 College Bus Facility:</strong><br>
• Routes covering all major areas of Jaipur<br>
• Morning pickup: 7:30 AM – 8:30 AM<br>
• Evening drop: 5:30 PM & 6:30 PM<br>
• Annual Bus Pass: ₹10,000 – ₹15,000 (based on distance)<br><br>
📞 Transport Office: <strong>9829855516</strong><br><br>
💡 <em>Tip: Hostel on campus is the most convenient option!</em>` },

  {
    tags: ['library', 'books', 'journal', 'digital library', 'ieee', 'scopus', 'reading', 'borrow', 'e-library', 'library hours'],
    reply: `<strong>📚 Central Library — Poornima University</strong><br><br>
One of Rajasthan's finest university libraries!<br><br>
<table>
<tr><th>Resource</th><th>Detail</th></tr>
<tr><td>Physical Books</td><td>50,000+</td></tr>
<tr><td>National & International Journals</td><td>300+</td></tr>
<tr><td>Seating Capacity</td><td>300+ students</td></tr>
<tr><td>Digital Databases</td><td>IEEE · Scopus · Web of Science · J-Gate · NPTEL</td></tr>
</table><br>
<strong>⏰ Library Hours:</strong><br>
• Mon–Fri: 8:00 AM – 9:00 PM<br>
• Saturday: 9:00 AM – 5:00 PM<br>
• Extended hours during examination period<br><br>
<strong>📖 Borrowing Rules:</strong><br>
• 3 books at a time · 15-day loan period<br>
• Fine for late return: ₹2 per book per day` },

  {
    tags: ['internship', 'intern', 'summer training', 'industrial training', 'live project', 'internship companies'],
    reply: `<strong>🔬 Internship & Industrial Training — PU</strong><br><br>
Poornima University mandates industry exposure through structured internships.<br><br>
<strong>Programs:</strong><br>
• 6-week mandatory summer internship (B.Tech students)<br>
• Live projects with industry partners<br>
• Semester-long internship (6th/7th semester elective)<br>
• Research internships at ASRC<br><br>
<strong>🏢 Partner Companies Include:</strong><br>
TCS · Infosys · Wipro · Amazon · Deloitte · HCL · L&T · Capgemini · and 300+ more<br><br>
<strong>Support Provided:</strong><br>
• Resume & LinkedIn profile guidance<br>
• Interview preparation workshops<br>
• Portfolio building sessions<br><br>
📞 HR / Internships: <strong>8875666627</strong><br>
📧 <strong>hr@poornima.edu.in</strong>` },

  {
    tags: ['alumni', 'past student', 'old student', 'graduate', 'alumni meet', 'alumni network', 'alumni benefits'],
    reply: `<strong>🎓 Alumni Network — Poornima University</strong><br><br>
PU has a thriving and connected global alumni community!<br><br>
<strong>📊 Highlights:</strong><br>
• 4,500+ students placed in top companies (last 3 years)<br>
• Alumni working at Microsoft, Amazon, Google, TCS, Infosys, Wipro, and more<br>
• Entrepreneurs, IAS officers, researchers, and artists among alumni<br><br>
<strong>📅 Alumni Events:</strong><br>
• Annual Alumni Meet (typically held in November)<br>
• Distinguished Alumni Guest Lectures<br>
• Student-Alumni Mentorship Programs<br>
• Career guidance & networking sessions<br><br>
📞 Alumni Services: <strong>8875666645</strong><br>
📧 <strong>cas.pu@poornima.edu.in</strong>` },

  {
    tags: ['exam', 'examination', 'result', 'marks', 'attendance', 'internal exam', 'semester exam', 'syllabus', 'academic calendar', 'university exam'],
    reply: `<strong>📝 Examinations & Academics — PU</strong><br><br>
<strong>Academic Structure:</strong><br>
• Semester System (2 semesters per year)<br>
• Choice-Based Credit System (CBCS)<br>
• Minimum <strong>75% attendance</strong> mandatory to appear in exams<br><br>
<strong>Internal Assessment:</strong><br>
• 2 internal exams per semester<br>
• Assignments, practicals, projects & presentations<br>
• Continuous Evaluation throughout semester<br><br>
<strong>End Semester Exams:</strong><br>
• Odd Semester: November<br>
• Even Semester: April / May<br>
• Conducted by Rajasthan Technical University (RTU) / PU<br><br>
<strong>Results:</strong><br>
• Internal: within 2 weeks of exam<br>
• University: 45–60 days post exam<br>
• Check online: <a href="https://poornima.edu.in" target="_blank">poornima.edu.in → Student Portal</a><br><br>
⚠️ <strong>Students with &lt;75% attendance may be detained from exams</strong>` },

  {
    tags: ['thanks', 'thank you', 'thank', 'helpful', 'great', 'awesome', 'nice', 'good', 'perfect', 'superb', 'excellent', 'bahut acha'],
    reply: `You're most welcome! 😊<br><br>
It's my pleasure to help you explore <strong>Poornima University</strong> — truly one of Rajasthan's finest institutions.<br><br>
Is there anything else you'd like to know?<br>
<span class="tag" data-query="How to apply for admission?">📋 Admissions</span>
<span class="tag" data-query="What is the fee structure?">💰 Fees</span>
<span class="tag" data-query="Tell me about placements">💼 Placements</span>
<span class="tag" data-query="Scholarship schemes">🎖️ Scholarships</span>` },

  {
    tags: ['bye', 'goodbye', 'see you', 'exit', 'later', 'take care', 'ok bye', 'thanks bye'],
    reply: `<strong>Goodbye! 👋</strong><br><br>
Thank you for using <strong>PU Assistant</strong>. We hope to welcome you to <strong>Poornima University</strong> soon!<br><br>
📞 <strong>8875666617</strong><br>
📧 <strong>admission@poornima.edu.in</strong><br>
🌐 <a href="https://poornima.edu.in" target="_blank">poornima.edu.in</a><br><br>
<em>"Your Dream, Our Goal." — Poornima University</em>` }
];

const DEFAULT_REPLY = `I'm sorry, I didn't quite catch that. 🤔<br><br>
I can help you with information about:<br>
<span class="tag" data-query="How to apply for admission?">📋 Admission</span>
<span class="tag" data-query="What courses are offered?">📚 Courses</span>
<span class="tag" data-query="What is the fee structure?">💰 Fees</span>
<span class="tag" data-query="Tell me about placements">💼 Placements</span>
<span class="tag" data-query="Hostel facilities">🏠 Hostel</span>
<span class="tag" data-query="Scholarship schemes">🎖️ Scholarships</span>
<span class="tag" data-query="Campus facilities">🏫 Campus</span>
<span class="tag" data-query="Contact details">📞 Contact</span>
<span class="tag" data-query="Rankings and accreditation">🏆 Rankings</span>
<span class="tag" data-query="PhD programs">🔬 PhD</span><br><br>
Or try rephrasing your question in different words!`;

function normalizeInput(str) {
  return str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function similarity(a, b) {
  if (a === b) return 1;
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  const editSim = 1 - levenshtein(a, b) / maxLen;
  const substringBonus = (b.includes(a) || a.includes(b)) ? 0.2 : 0;
  const prefixBonus = (a.startsWith(b.slice(0, 3)) || b.startsWith(a.slice(0, 3))) ? 0.1 : 0;
  return Math.min(1, editSim + substringBonus + prefixBonus);
}

function fuzzyMatchTag(inputWord, tag) {
  const tagWords = tag.split(/\s+/);
  let best = 0;
  for (const tw of tagWords) {
    if (tw.length < 3) continue;
    const sim = similarity(inputWord, tw);
    if (sim > best) best = sim;
  }
  return best;
}

const INTENT_LABELS = {
  'hello': '👋 Greetings',
  'hi': '👋 Greetings',
  'about': '🏛️ About PU',
  'admission': '📋 Admission',
  'eligibility': '✅ Eligibility',
  'courses': '📚 Courses',
  'departments': '🏛️ Departments',
  'fees': '💰 Fees',
  'scholarship': '🎖️ Scholarships',
  'hostel': '🏠 Hostel',
  'placement': '💼 Placements',
  'facilities': '🏫 Campus Facilities',
  'faculty': '👨‍🏫 Faculty',
  'contact': '📞 Contact',
  'ranking': '🏆 Rankings',
  'events': '🎉 Events',
  'phd': '🔬 PhD',
  'transport': '🚌 Transport',
  'library': '📚 Library',
  'internship': '🔬 Internship',
  'alumni': '🎓 Alumni',
  'exam': '📝 Exams',
  'thanks': '😊 Thanks',
  'bye': '👋 Goodbye'
};

function getIntentLabel(intent) {
  for (const key of Object.keys(INTENT_LABELS)) {
    if (intent.tags.includes(key)) return INTENT_LABELS[key];
  }
  return intent.tags[0];
}

function smartGetReply(input) {
  const q = normalizeInput(input);
  const words = q.split(/\s+/).filter(w => w.length > 1);

  let bestIntent = null;
  let bestScore = 0;

  KB.forEach(intent => {
    let score = 0;

    intent.tags.forEach(tag => {
      const t = tag.toLowerCase();

      if (q.includes(t)) {
        score += 20;
        return;
      }

      const tagWords = t.split(/\s+/);
      tagWords.forEach(tw => {
        if (tw.length < 3) return;
        if (words.includes(tw)) {
          score += 8;
          return;
        }
        words.forEach(inputWord => {
          if (inputWord.length < 2) return;
          const sim = similarity(inputWord, tw);
          if (sim >= 0.82) score += sim * 10;
          else if (sim >= 0.65) score += sim * 4;
        });
      });
    });

    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  });

  if (bestScore >= 8) {
    return {
      reply: bestIntent.reply,
      confidence: 'high',
      label: getIntentLabel(bestIntent)
    };
  }

  if (bestScore >= 3) {
    return {
      reply: bestIntent.reply,
      confidence: 'low',
      label: getIntentLabel(bestIntent)
    };
  }

  return { reply: DEFAULT_REPLY, confidence: 'none', label: null };
}

function renderMsg(textOrHtml, who) {
  const chat = document.getElementById('chat');
  const typing = document.getElementById('typing');
  const icon = who === 'bot' ? '🎓' : '👤';
  const avClass = who === 'bot' ? 'bot-av' : 'user-av';

  const row = document.createElement('div');
  row.className = `msg-row ${who}`;

  const av = document.createElement('div');
  av.className = `av ${avClass}`;
  av.textContent = icon;
  const GEMINI_API_KEY = 'AIzaSyB2Io5h9ZlZw-0CpBidY_MRYpmrEf_smgM';

  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  if (who === 'user') {
    bubble.textContent = textOrHtml;
  } else {
    bubble.innerHTML = textOrHtml;
  }

  const ts = document.createElement('span');
  ts.className = 'ts';
  ts.textContent = getTime();
  bubble.appendChild(ts);

  row.appendChild(av);
  row.appendChild(bubble);
  chat.insertBefore(row, typing);

  chat.scrollTo({ top: chat.scrollHeight, behavior: 'smooth' });
}

// --- NEW API INTEGRATION ---
const GEMINI_API_KEY = 'AIzaSyB2Io5h9ZlZw-0CpBidY_MRYpmrEf_smgM';

async function getAIReply(userMessage) {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
    console.warn("Gemini API key is missing. Please add it to PU.js");
    return { success: false, text: null };
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: "You are the Campus AI Assistant for Poornima University. Provide helpful, concise, and polite answers about admissions, courses, fees, placements, scholarships, and campus facilities. Use emojis to make the response friendly. Keep answers short and well-formatted." }]
        },
        contents: [{
          parts: [{ text: userMessage }]
        }]
      })
    });

    if (!response.ok) throw new Error('Gemini API responded with error: ' + response.status);

    const data = await response.json();
    const replyText = data.candidates[0].content.parts[0].text;
    return { success: true, text: replyText };
  } catch (error) {
    console.warn("Gemini API unreachable or failed. Falling back to local logic.", error);
    return { success: false, text: null };
  }
}

async function sendMessage() {
  const inp = document.getElementById('msgInput');
  const text = inp.value.trim();
  if (!text) return;

  const wc = document.getElementById('welcomeCard');
  if (wc) wc.style.display = 'none';

  renderMsg(text, 'user');
  inp.value = '';
  updateCharCount();

  const t = document.getElementById('typing');
  t.classList.add('show');

  const chatBox = document.getElementById('chat');
  chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: 'smooth' });

  // Call the Node backend for Gemini API response
  const aiResponse = await getAIReply(text);

  t.classList.remove('show');

  if (aiResponse.success) {
    // API Succeeded
    // Convert basic markdown backticks to code or bold (Gemini often uses markdown)
    let formattedText = aiResponse.text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');

    const banner = `<span style="display:inline-block;background:rgba(0,229,255,0.1);border:1px solid rgba(0,229,255,0.3);border-radius:10px;padding:5px 12px;margin-bottom:10px;font-size:12px;color:#00E5FF;">✨ AI Assistant</span><br>`;

    renderMsg(banner + formattedText, 'bot');
  } else {
    // API Failed -> Fallback to Local Fuzzy Match
    const result = smartGetReply(text);
    let finalReply = result.reply;

    const fallbackBanner = `<span style="display:inline-block;background:rgba(255,165,0,0.1);border:1px solid rgba(255,165,0,0.3);border-radius:10px;padding:5px 12px;margin-bottom:10px;font-size:12px;color:#FFA500;">⚠️ Live AI Offline (Local Fallback)</span><br>`;

    if (result.confidence === 'high' && result.label) {
      finalReply = fallbackBanner + `<span style="display:inline-block;background:rgba(0,229,255,0.1);border:1px solid rgba(0,229,255,0.3);border-radius:10px;padding:5px 12px;margin-bottom:10px;font-size:12px;color:#00E5FF;">✨ Showing results for <strong>${result.label}</strong></span><br>` + finalReply;
    } else if (result.confidence === 'low' && result.label) {
      finalReply = fallbackBanner + `<span style="display:inline-block;background:rgba(176,38,255,0.1);border:1px solid rgba(176,38,255,0.3);border-radius:10px;padding:5px 12px;margin-bottom:10px;font-size:12px;color:#B026FF;">💡 Did you mean <strong>${result.label}</strong>?</span><br>` + finalReply;
    } else {
      finalReply = fallbackBanner + finalReply;
    }

    renderMsg(finalReply, 'bot');
  }
}

function updateCharCount() {
  document.getElementById('charCount').textContent = `${document.getElementById('msgInput').value.length} / 400 chars`;
}

document.body.addEventListener('click', (e) => {
  const interactiveElement = e.target.closest('[data-query]');
  if (interactiveElement) {
    document.getElementById('msgInput').value = interactiveElement.dataset.query;
    sendMessage();
  }
});

document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('msgInput').addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });
document.getElementById('msgInput').addEventListener('input', updateCharCount);
document.getElementById('clearBtn').addEventListener('click', () => {
  document.querySelectorAll('.msg-row, .welcome').forEach(el => el.remove());
  setTimeout(() => renderMsg(`Chat cleared! What else can I help with?<br><br>
    <span class="tag" data-query="How to apply for admission?">📋 Admissions</span>
    <span class="tag" data-query="What courses are offered?">📚 Courses</span>`, 'bot'), 100);
});

let SRec = null;
let isListening = false;

document.getElementById('voiceBtn').addEventListener('click', () => {
  const btn = document.getElementById('voiceBtn');
  const inp = document.getElementById('msgInput');

  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert('Voice input not supported in this browser. Please use Chrome.');
    return;
  }

  if (!SRec) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    SRec = new SR();
    SRec.lang = 'en-IN';
    SRec.interimResults = false;

    SRec.onstart = () => {
      isListening = true;
      btn.classList.add('on');
      inp.placeholder = '🎙️ Listening...';
    };
    SRec.onresult = e => {
      inp.value = e.results[0][0].transcript;
      updateCharCount();
      sendMessage();
    };
    SRec.onend = () => {
      isListening = false;
      btn.classList.remove('on');
      inp.placeholder = 'Ask about admissions, courses, fees...';
    };
  }

  isListening ? SRec.stop() : SRec.start();
});

window.onload = () => {
  setTimeout(() => {
    document.getElementById('msgInput').focus();
  }, 3000);
};
