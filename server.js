const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


const card = {
  'the fool': {
    'type': 'Major Arcana',
    'cardName': 'The Fool',
    'description': 'Behold the Fool, a daring adventurer at the precipice of destiny. With carefree abandon, he stands on the edge, ready to leap into the unknown. Unaware of the imminent plunge, his gaze fixates on the boundless sky. Clutching a humble knapsack, he embraces minimalism and unlimited potential. A white rose embodies his purity, while a loyal canine companion nudges him forward. The looming mountains foretell challenges, yet his unyielding spirit fuels his expedition. With fearless steps, he embarks on a transformative journey, leaving behind the constraints of fear and embracing the magic of the Fool\'s quest.',
    'upright1': 'Spontaneity: The Fool upright represents a carefree and spontaneous nature. It is associated with taking risks and embracing new adventures without fear or hesitation.',
    'upright2': 'Innocence: The Fool embodies a sense of childlike innocence and naivety. It suggests a lack of preconceived notions or biases, allowing for a fresh perspective and open-mindedness.',
    'upright3': 'Optimism: This card radiates positivity and optimism. The Fool upright encourages a hopeful outlook on life, emphasizing the belief that everything will work out for the best.',
    'upright4': 'Freedom: The Fool symbolizes freedom from constraints and limitations. It signifies a willingness to break free from societal norms or expectations, embracing personal freedom and individuality.',
    'upright5': 'Beginnings: The Fool is associated with new beginnings and fresh starts. It represents the start of a journey or a new phase in life, urging you to embrace change and take the first steps towards your goals.',
    'reversed1': 'Recklessness: The Fool reversed indicates a lack of caution or thoughtfulness in your actions. It suggests impulsive behavior and a tendency to act without considering the consequences.',
    'reversed2': 'Foolishness: In the reversed position, the Fool represents poor judgment or decision-making. It signifies a lack of wisdom or understanding, leading to unwise choices or actions.',
    'reversed3': 'Naivety: The Fool reversed suggests a state of being overly trusting or gullible. It signifies a vulnerability to deception or manipulation, as well as a tendency to overlook important details or warning signs.',
    'reversed4': 'Stagnation: This card in reverse can indicate a resistance to change or a fear of taking risks. It suggests a reluctance to embrace new opportunities or step out of your comfort zone, leading to a sense of stagnation or missed chances.',
    'reversed5': 'Consequences: The Fool reversed often signifies facing the consequences of your actions or decisions. It warns of potential setbacks, misunderstandings, or negative outcomes resulting from hasty or ill-considered choices.',
    'images': '/images/the-fool.png',
  },
  'the magician': {
    'type': 'Major Arcana',
    'cardName': 'The Magician',
    'description': 'Witness the Magician, a master of infinite possibilities and conjurer of destiny. With arms outstretched, he bridges the realms of spirit and matter. His touch transforms energy into tangible realities, a conduit of creation. Clad in a robe of purest white, he embodies purity, while his fiery cloak reflects worldly wisdom. Before him, the Tarot symbols await, embodying the elements and his mastery. The infinity symbol above signifies boundless potential, while a self-consuming snake whispers secrets of endless transformation. Amidst blossoming foliage, his visions manifest, a mesmerizing dance of dreams turned into tangible truths.',
    'uprightOne': 'Mastery: The Magician upright represents a mastery of skills and abilities. It signifies having the knowledge, expertise, and confidence to manifest your desires and goals effectively.',
    'uprightTwo': 'Creativity: This card symbolizes creative energy and the power of imagination. The Magician encourages innovative thinking and resourcefulness in finding unique solutions to challenges.',
    'uprightThree': 'Manifestation: The Magician upright embodies the ability to manifest your intentions into reality. It signifies the power of focused intention, willpower, and taking action to bring about desired outcomes.',
    'uprightFour': 'Transformation: The Magician represents a transformative energy that facilitates personal growth and positive change. It suggests harnessing your inner potential and embracing opportunities for self-improvement.',
    'uprightFive': 'Alignment: This card signifies the alignment of mind, body, and spirit. The Magician upright encourages individuals to tap into your inner wisdom and connect with your higher selves, creating a harmonious balance within yourself and your surroundings.',
    'reversedOne': 'Manipulation: The Magician reversed can indicate a tendency towards manipulation or deceit. It suggests the misuse of power or skills for personal gain, leading to dishonesty or trickery.',
    'reversedTwo': 'Lack of Focus: In the reversed position, the Magician represents a lack of focus or direction. It suggests scattered energy and an inability to harness your abilities effectively, resulting in a lack of progress or achievement.',
    'reversedThree': 'Misuse of Power: This card signifies the misuse or abuse of power. It suggests that you may be using your skills or influence in a negative or harmful way, potentially causing harm to others or themselves.',
    'reversedFour': 'Ineffectiveness: The Magician reversed represents a lack of effectiveness or inefficiency in your actions. It suggests that despite having the necessary skills or resources, you are unable to utilize them effectively, leading to unsuccessful outcomes or missed opportunities.',
    'reversedFive': 'Blocked Potential: This card in reverse can indicate a blockage or suppression of your potential. It suggests a failure to tap into your true abilities or talents, resulting in a sense of stagnation or unfulfilled potential.',
    'images': '',
  },
  'the high priestess': {
    'type': 'Major Arcana',
    'suit': '',
    'cardName': 'The High Priestess',
    'description': 'Unveiling the High Priestess, an enchanting guardian of ancient wisdom. Clad in mystic allure, she sits before a veil embellished with tempting pomegranates, concealing the realms of the seen and unseen. Only the bold and initiated may pierce its ethereal barrier. Amidst two majestic pillars, one shrouded in darkness, the other bathed in light, she whispers of profound duality. Surrender to her beckoning embrace, and traverse the hallowed depths where secrets of the universe dance, awaiting those who seek divine revelation.',
    'uprightOne': 'Intuition: The High Priestess upright represents deep intuition and inner wisdom. It suggests the ability to tap into your subconscious mind and access intuitive insights and knowledge.',
    'uprightTwo': 'Mystery: This card embodies a sense of mystery and hidden knowledge. The High Priestess signifies the presence of secrets, hidden truths, and esoteric wisdom that may be revealed over time.',
    'uprightThree': 'Feminine Energy: The High Priestess is associated with feminine energy and the divine feminine. It represents intuition, receptivity, and the nurturing aspects of your nature.',
    'uprightFour': 'Spiritual Connection: This card symbolizes a strong connection to the spiritual realm. It suggests a deep understanding of spiritual matters, meditation, and inner reflection to gain spiritual insights and guidance.',
    'uprightFive': 'Inner Balance: The High Priestess upright signifies inner balance and harmony. It suggests a state of equilibrium between the conscious and subconscious mind, embracing both rationality and intuition in decision-making and life choices.',
    'reversedOne': 'Blocked Intuition: The High Priestess reversed suggests a blockage or suppression of your intuition. It indicates a lack of trust in your inner wisdom and an inability to access or heed intuitive guidance.',
    'reversedTwo': 'Hidden Knowledge: In the reversed position, the High Priestess represents hidden or obscured knowledge that remains out of reach. It suggests a difficulty in uncovering deeper truths or accessing esoteric wisdom.',
    'reversedThree': 'Lack of Understanding: This card signifies a lack of understanding or confusion. The High Priestess reversed suggests a struggle to grasp the deeper meaning or significance of certain experiences or situations.',
    'reversedFour': 'Disconnection from Spirituality: In the reversed position, the High Priestess indicates a disconnection from spirituality or a lack of spiritual exploration. It suggests a diminished connection to your higher self and a disregard for inner reflection or spiritual practices.',
    'reversedFive': 'Imbalance: The High Priestess reversed suggests an imbalance between the conscious and subconscious mind. It signifies a lack of inner harmony, where rationality and intuition are at odds, leading to confusion or indecisiveness.',
    'images': '',
  },
  'the empress': {
    'type': 'Major Arcana',
    'suit': '',
    'cardName': 'The Empress',
    'description': 'Enter the realm of the Empress, a radiant force of creation and nurturing abundance. Adorned in lush greenery, she sits upon a throne of blossoming beauty. The embodiment of fertility, she nurtures life\'s bountiful harvest. Golden wheat fields sway in homage to her abundant grace. Her loving gaze and compassionate embrace radiate maternal power. With each breath, she breathes life into dreams and manifests them into reality. The Empress, a goddess of earthly delights, invites you to embrace your creative potential and immerse yourself in the abundant tapestry of existence.',
    'uprightOne': 'Fertility: The Empress upright represents fertility, both in terms of physical fertility and the ability to nurture and create. It signifies a time of abundance, growth, and the potential for new beginnings.',
    'uprightTwo': 'Nurturing: This card embodies nurturing and maternal energy. The Empress signifies a caring and compassionate nature, offering support and guidance to others. It represents the ability to create a loving and nurturing environment.',
    'uprightThree': 'Creativity: The Empress upright symbolizes creativity and artistic expression. It suggests a time of inspiration and the birth of new ideas. This card encourages embracing your creative abilities and exploring artistic endeavors.',
    'uprightFour': 'Abundance: This card represents abundance and prosperity. The Empress signifies a time of material and emotional abundance, where resources and opportunities are readily available. It suggests a sense of wealth and fulfillment.',
    'uprightFive': 'Harmony: The Empress upright signifies harmony and balance. It represents a state of equilibrium and contentment, where one feels connected to the natural rhythms of life. This card suggests finding harmony within yourself and in relationships with others.',
    'reversedOne': 'Lack of Nurturing: The Empress reversed suggests a lack of nurturing or neglectful behavior. It signifies a failure to provide care and support to yourself or others. It may indicate difficulties in creating a loving and nurturing environment.',
    'reversedTwo': 'Creative Block: In the reversed position, the Empress represents a creative block or a struggle to express yourself artistically. It suggests a lack of inspiration or difficulty in manifesting creative ideas.',
    'reversedThree': 'Scarcity: This card indicates a sense of scarcity or a lack of abundance. The Empress reversed signifies a period of limited resources, both material and emotional. It may suggest financial challenges or a feeling of emptiness.',
    'reversedFour': 'Disharmony: The Empress reversed represents disharmony and imbalance. It suggests a lack of harmony within yourself or in relationships. It may indicate conflicts, discord, or a sense of disconnection from the natural rhythms of life.',
    'reversedFive': 'Self-neglect: This card suggests self-neglect or a disregard for self-care. The Empress reversed signifies a tendency to put others\' needs before your own, leading to a depletion of energy and a lack of personal fulfillment.',
    'images': '',
  },
  'the emperor': {
    'type': 'Major Arcana',
    'suit': '',
    'cardName': 'The Emperor',
    'description': 'Commanding and resolute, the Emperor rules with unwavering authority. Seated on a throne of strength, his presence exudes power and leadership. Clad in regal armor, he channels the fiery energy of ambition. A long white beard symbolizes wisdom earned through experience. His gaze penetrates, as he forges order from chaos. The ram\'s heads on his throne represent his fierce determination. The Emperor, a master of structure and discipline, implores you to embrace your inner strength and embrace the challenges that lie ahead with unwavering confidence.',
    'uprightOne': 'Authority: The Emperor upright represents authority and leadership. It symbolizes a strong and confident individual who is capable of taking charge and making decisions with clarity and conviction.',
    'uprightTwo': 'Structure: This card embodies structure and organization. The Emperor signifies the establishment of order and systems, providing a solid foundation for stability and success.',
    'uprightThree': 'Power: The Emperor upright signifies personal power and control. It represents the ability to assert yourself and influence your surroundings, displaying strength and resilience in the face of challenges.',
    'uprightFour': 'Discipline: This card represents discipline and self-control. The Emperor signifies the importance of setting boundaries, adhering to rules, and maintaining a focused approach in order to achieve goals.',
    'uprightFive': 'Responsibility: The Emperor upright embodies responsibility and accountability. It signifies taking on leadership roles, fulfilling obligations, and being accountable for your actions and decisions. This card emphasizes the need for wise and responsible governance.',
    'reversedOne': 'Authoritarianism: The Emperor reversed suggests a misuse or abuse of authority. It signifies a tendency towards oppressive or dictatorial behavior, where power is exercised in a domineering or controlling manner.',
    'reversedTwo': 'Lack of Structure: In the reversed position, the Emperor represents a lack of structure or disorganization. It signifies a difficulty in establishing and maintaining order, leading to chaos or instability.',
    'reversedThree': 'Power Struggles: This card suggests power struggles or challenges to authority. The Emperor reversed signifies conflicts or resistance to established leadership, often resulting from a lack of trust or dissatisfaction with the current structure.',
    'reversedFour': 'Lack of Discipline: In the reversed position, the Emperor signifies a lack of discipline or self-control. It suggests a tendency towards impulsiveness or erratic behavior, leading to a lack of focus or direction.',
    'reversedFive': 'Irresponsibility: The Emperor reversed embodies a lack of responsibility or accountability. It suggests an avoidance of leadership roles or a failure to fulfill obligations and duties. This card highlights a lack of maturity or unwillingness to take on necessary responsibilities.',
    'images': '',
  },
  'the hierophant': {
    'type': 'Major Arcana',
    'suit': '',
    'cardName': 'The Hierophant',
    'description': 'Enter the realm of the Hierophant, a beacon of spiritual wisdom and divine guidance. Seated on a sacred throne, he embodies the essence of tradition and ritual. Clad in robes adorned with sacred symbols, his presence invokes reverence. The keys at his feet symbolize unlocking hidden knowledge. Two acolytes beside him seek his teachings. The Hierophant, a conduit of ancient wisdom, invites you to embrace tradition while seeking your own spiritual truths. Through his guidance, you\'ll unravel the profound mysteries of existence and find harmony between tradition and personal enlightenment.',
    'uprightOne': 'Tradition: The Hierophant upright represents tradition and conformity. It signifies adherence to established norms, rituals, and cultural or religious customs.',
    'uprightTwo': 'Spiritual Guidance: This card embodies spiritual guidance and wisdom. The Hierophant signifies the presence of a spiritual teacher or mentor who imparts valuable knowledge and guidance on matters of spirituality and belief systems.',
    'uprightThree': 'Authority: The Hierophant upright signifies authority and leadership in spiritual or religious matters. It represents an individual or institution with a significant role in providing guidance, interpreting doctrines, or upholding religious teachings.',
    'uprightFour': 'Conformity: This card suggests a need for conformity or adherence to societal norms. The Hierophant signifies a desire to fit in or seek validation through adhering to established structures and belief systems.',
    'uprightFive': 'Rituals and Ceremonies: The Hierophant upright embodies rituals, ceremonies, and formalities. It represents the importance of participating in meaningful rituals or ceremonies to foster spiritual connection and growth. This card emphasizes the significance of tradition and shared experiences within a community or group. ',
    'reversedOne': 'Nonconformity: The Hierophant reversed signifies a rejection of traditional norms and a resistance to conformity. It suggests a desire to break free from established structures and explore alternative paths or belief systems.',
    'reversedTwo': 'Unconventional Spirituality: In the reversed position, the Hierophant represents a departure from mainstream spirituality or organized religion. It suggests a personal exploration of spirituality that diverges from established practices or doctrines.',
    'reversedThree': 'Questioning Authority: This card suggests a skepticism towards authority figures or institutions. The Hierophant reversed signifies a tendency to question the teachings and guidance of traditional authorities, seeking your own truths and beliefs.',
    'reversedFour': 'Unorthodox Practices: The Hierophant reversed embodies unorthodox or alternative practices. It represents a willingness to explore different spiritual paths or unconventional methods of seeking enlightenment or inner wisdom.',
    'reversedFive': 'Spirituality in Personal Terms: This card suggests an individualized approach to spirituality. The Hierophant reversed signifies the importance of finding your own spiritual path and defining your beliefs and practices based on personal experiences and insights.',
    'images': '',
  },
  'the lovers': {
    'type': 'Major Arcana',
    'suit': '',
    'cardName': 'The Lovers',
    'description': 'Embark on the journey of the Lovers, where passion and harmony entwine. Two souls stand at the precipice of profound connection. Their gazes lock, igniting a flame that transcends the physical. Above, an angel blesses their union, whispering celestial guidance. The intertwined trees symbolize the intertwining of their destinies. Eros\' arrow strikes deep, forging a bond that defies time and space. In the realm of the Lovers, love conquers all, urging you to embrace the transformative power of true connection and celebrate the harmonious dance of hearts entwined.',
    'uprightOne': '',
    'uprightTwo': '',
    'uprightThree': '',
    'uprightFour': '',
    'uprightFive': '',
    'reversedOne': '',
    'reversedTwo': '',
    'reversedThree': '',
    'reversedFour': '',
    'reversedFive': '',
    'images': '',
  },
  'unknown': {
    'type': 'unknown',
    'cardName': 'unknown',
    'uprightKeywords': 'unknown',
    'reversedKeywords': 'unknown',
    'description': 'unknown',
    'images': 'unknown',
  }  
}

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
  const tarotCards = req.params.name.toLowerCase()
  if(card[tarotCards]){
    res.json(card[tarotCards])
  }else{
    res.json(card['unknown'])
  }
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`Woo port ${PORT} is up and running - go catch it!`)
})



