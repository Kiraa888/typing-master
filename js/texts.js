export const texts = {
    easy: [
        "the quick brown fox jumps over the lazy dog",
        "frontend development requires practice and logic",
        "coding is like solving a puzzle with logic",
        "always remember to drink water and take breaks",
        "typing fast is about muscle memory and rhythm",
        "The cat sat on the mat. The dog ran in the park. The sun is very hot today. Birds fly in the blue sky. Fish swim in the water. I like to eat ice cream.",
        "My name is Tom. I live in a small house. I have a red car. Every day I go to work. I like my job. My friends are kind and helpful.",
        "The weather is nice. The grass is green. Flowers bloom in spring. Trees give us shade. Rain helps plants grow. We need water to live.",
        "I wake up early. I brush my teeth. I eat a good breakfast. Then I get ready for the day. I drink fresh milk. I pack my bag and leave.",
        "Books are fun to read. Stories take us to new places. We learn many things from books. Reading makes us smart. I read before bed. The library has many books.",
        "The moon shines at night. Stars twinkle in the dark sky. The ocean has big waves. Mountains are very tall. Rivers flow to the sea. Nature is beautiful.",
        "I have a pet dog. His name is Max. He likes to play ball. We go for walks every day. Max is my best friend. He wags his tail when happy."
    ],
    medium: [
        "Performance optimization is crucial when manipulating the DOM.",
        "Separation of concerns leads to scalable application architecture.",
        "A full-stack developer understands both the client and server side.",
        "Consistency in your training routine yields the best strength gains.",
        "Responsive web design ensures your layout looks great on mobile.",
        "Technology has changed our lives in remarkable ways. Modern smartphones allow us to communicate instantly with anyone around the world. The internet provides unlimited information at our fingertips. Scientists continue to develop innovative solutions for global challenges. Artificial intelligence is becoming more sophisticated each year.",
        "Traveling to different countries opens our minds to diverse cultures. Experiencing foreign cuisines, traditions, and languages enriches our understanding of humanity. Every destination offers unique landscapes, from tropical beaches to snow-capped mountains. Meeting people from various backgrounds creates lasting friendships and memories.",
        "Exercise and healthy eating are essential for maintaining physical wellness. Regular cardiovascular activity strengthens the heart and improves endurance. A balanced diet rich in vegetables, fruits, and proteins fuels our bodies efficiently. Drinking sufficient water throughout the day keeps us hydrated and energized. Adequate sleep allows our minds and bodies to recover properly.",
        "Climate change represents one of the greatest challenges facing our generation. Rising temperatures are melting polar ice caps and threatening ecosystems worldwide. Renewable energy sources like solar and wind power offer sustainable alternatives to fossil fuels. Individual actions, such as reducing waste and conserving resources, collectively make a significant impact.",
        "The educational system continues to evolve with technological advancements. Online learning platforms provide flexible opportunities for students everywhere. Interactive multimedia content makes complex subjects more engaging and accessible. Teachers are adapting their methods to incorporate digital tools effectively. Collaboration between students across continents is now commonplace.",
        "Financial literacy empowers individuals to make informed economic decisions. Understanding budgeting, saving, and investing builds long-term security and independence. Compound interest demonstrates how money can grow exponentially over time. Avoiding unnecessary debt and building emergency funds provides peace of mind during uncertain periods.",
        "Photography captures moments that words alone cannot fully express. The interplay of light, shadow, and composition creates powerful visual narratives. Modern cameras offer incredible features, from high-resolution sensors to advanced autofocus systems. Post-processing software enables photographers to enhance their creative vision while maintaining authenticity."
    ],
    hard: [
        "document.getElementById('app').insertAdjacentHTML('beforeend', template);",
        "const calculateWPM = (correct, time) => Math.round((correct/5)/time);",
        "fetch('api/data').then(res => res.json()).then(data => console.log(data));",
        "function throttle(cb, delay) { let wait = false; return (...args) => { if (wait) return; cb(...args); wait = true; setTimeout(() => wait = false, delay); } }",
        "body { background: linear-gradient(135deg, #0f0000 0%, #1a0202 100%); overflow-x: hidden; }",
        "The quantum computer's processing capability exceeded 1,000 qubits by 2024. Researchers at MIT demonstrated entanglement across 127 superconducting circuits simultaneously. The algorithm's time complexity was O(n log n), significantly outperforming classical methods. Cryogenic temperatures below -273.15°C (absolute zero) were required to maintain coherence. Error correction rates improved to 99.97% through advanced stabilizer codes.",
        "According to the RFC 2616 specification, HTTP/1.1 protocol uses methods like GET, POST, PUT & DELETE. RESTful APIs typically return JSON-formatted responses: {"status": 200, "data": [...]}, with Content-Type: application/json headers. Authentication often requires OAuth 2.0 tokens in the format "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." The CORS policy may restrict cross-origin requests from *.example.com domains.",
        "The financial analyst calculated that $10,000 invested at 7.5% annual interest compounded quarterly yields approximately $21,137.04 after 10 years. The formula FV = PV(1 + r/n)^(nt) accounts for compounding frequency. Beta coefficients > 1.0 indicate higher volatility relative to market indices. The P/E ratio of 23.7x suggested the stock was trading at a ~18% premium versus sector averages.",
        "Neuroplasticity research reveals that the hippocampus generates approximately 700 new neurons daily in adults. Synaptic pruning eliminates roughly 50% of neural connections between ages 2-16 years. GABA (γ-aminobutyric acid) and glutamate serve as the brain's primary inhibitory & excitatory neurotransmitters. fMRI scans measuring BOLD signals detect hemodynamic responses at 3-6 second intervals.",
        "The spacecraft achieved escape velocity (11.2 km/s) at T+8:47 minutes, reaching an apogee of 384,400 km. Delta-v requirements totaled 3,850 m/s including orbital insertion & trans-lunar injection burns. Mission Control monitored telemetry data at frequencies between 2.2-2.3 GHz (S-band). Trajectory corrections utilized reaction control thrusters producing 450N of thrust @ specific impulse = 220 seconds.",
        "The SQL query "SELECT * FROM users WHERE created_at BETWEEN '2024-01-01' AND '2024-12-31' ORDER BY id DESC LIMIT 100;" returned unexpected results. Database indexing on (email, username) improved performance by ~340%, reducing query time from 2.3s to 0.67s. The MongoDB aggregation pipeline used $match, $group, $project stages with $lookup for JOIN-equivalent operations across collections.",
        "Chemical equilibrium is expressed as K_eq = [C]^c[D]^d / [A]^a[B]^b for the reaction aA + bB ⇌ cC + dD. At 298K and 1 atm pressure, ΔG° = -RT ln(K_eq) determines spontaneity. The Henderson-Hasselbalch equation pH = pK_a + log([A⁻]/[HA]) calculates buffer solution acidity. Titration curves show equivalence points where moles(acid) = moles(base); ±0.02 pH units indicate the endpoint.",
    ],
    anime: [
        "Power comes in response to a need, not a desire. You have to create that need.",
        "Hard work is worthless for those that don't believe in themselves.",
        "When do you think people die? When they are forgotten.",
        "Throughout heaven and earth, I alone am the honored one.",
        "Arise. A king must protect his people, even if it means fighting alone."
    ]
};
