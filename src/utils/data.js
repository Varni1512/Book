import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

const defaultBlogs = [
  {
    id: 1,
    title: "Between Silence and Stone: An Egyptian Journey",
    description: "Andrew D. Levine reflects on Egypt beyond sightseeing — exploring how travel, unfamiliar places, and moments of discomfort can reshape the way we see the world and inspire new stories.",
    image: "/b1.webp",
    content: `Egypt is a land where time feels simultaneously frozen and constantly in motion. 
    
When I first arrived in Cairo, the sheer volume of sound, traffic, and history was overwhelming. It wasn't the pristine, silent Egypt of documentaries; it was alive, chaotic, and demanding of attention.

In this journey, I explored the silent stones of Karnak and the bustling alleys of Khan el-Khalili, finding that the true essence of travel isn't just in seeing monuments, but in the moments of discomfort that force you to grow. The juxtaposition of ancient pharaohs and modern street vendors creates a narrative that inevitably bleeds into my own writing. 

Every new story begins with a step into the unknown.`,
    date: "October 12, 2025",
    author: "Andrew D. Levine",
    category: "Travel"
  },
  {
    id: 2,
    title: "Quito and the Galápagos: A Personal Travelogue",
    description: "A journey from the streets of Quito to the volcanic landscapes of the Galápagos — filled with wildlife, discovery, and reflections on what it means to experience a world still shaped by nature.",
    image: "/b2.webp",
    content: `The transition from the high-altitude colonial streets of Quito to the rugged, prehistoric shores of the Galápagos is jarring in the best way possible.

In Quito, history is carved into the architecture, telling stories of conquest and religion. But in the Galápagos, history is written in the DNA of the iguanas and the giant tortoises. It is a place where humanity feels like an afterthought.

Witnessing the fearless wildlife on these islands reminded me of the raw, untamed forces that shape our world. It’s a humbling experience that strips away the noise of modern life and leaves you face-to-face with the essential elements of existence.`,
    date: "September 05, 2025",
    author: "Andrew D. Levine",
    category: "Travel"
  },
  {
    id: 3,
    title: "What Makes Indian Noir Different?",
    description: "From Mumbai's crowded streets to Delhi's hidden corridors, Indian noir blends crime, corruption, culture and moral ambiguity into stories where the city itself becomes part of the mystery.",
    image: "/b3.webp",
    content: `Noir is often associated with rain-slicked streets, trench coats, and cynical detectives in American or European settings. But when you transplant these elements into the vibrant, chaotic, and deeply complex landscape of India, you get something entirely unique.

Indian Noir isn't just about a murder; it's about the systemic layers of society. It's about a billionaire's high-rise in Mumbai casting a literal and metaphorical shadow over the slums below. It's about political machinery in Delhi moving silently behind closed doors.

The heat, the dust, the juxtaposition of extreme wealth and poverty—all these elements make the cities in Indian Noir act not just as settings, but as characters themselves. The moral ambiguity is thicker, shaped by centuries of culture and rapid modernization colliding head-on.`,
    date: "August 20, 2025",
    author: "Editorial Team",
    category: "Writing"
  }
];

export const getBlogs = async () => {
  try {
    const blogsRef = collection(db, 'blogs');
    const q = query(blogsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const blogs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return blogs.length > 0 ? blogs : defaultBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return defaultBlogs;
  }
};

export const addBlog = async (blog) => {
  try {
    const blogsRef = collection(db, 'blogs');
    const docRef = await addDoc(blogsRef, {
      ...blog,
      createdAt: new Date().toISOString(),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding blog:", error);
    throw error;
  }
};

export const updateBlog = async (id, updatedData) => {
  try {
    const blogRef = doc(db, 'blogs', id);
    await updateDoc(blogRef, updatedData);
    return true;
  } catch (error) {
    console.error("Error updating blog:", error);
    throw error;
  }
};

export const deleteBlog = async (id) => {
  try {
    const blogRef = doc(db, 'blogs', id);
    await deleteDoc(blogRef);
    return true;
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error;
  }
};

const dummyFormSubmissions = [
  { id: 101, date: "8/20/2026, 10:30:00 AM", name: "Rahul Verma", email: "rahul.v@example.com", city: "Mumbai", phone: "9876543210", bookTitle: "DEATH IN THE RAIN", language: "hindi", format: "paperback", price: 300 },
  { id: 102, date: "8/21/2026, 11:15:00 AM", name: "Priya Singh", email: "priya123@example.com", city: "Delhi", phone: "9123456789", bookTitle: "SILENT AUCTION MURDER", language: "english", format: "paperback", price: 600 },
  { id: 103, date: "8/21/2026, 02:45:00 PM", name: "Amit Patel", email: "amit.patel@example.com", city: "Ahmedabad", phone: "9988776655", bookTitle: "BOMBAY RECKLESS", language: "english", format: "kindle", price: 145 },
  { id: 104, date: "8/22/2026, 09:20:00 AM", name: "Neha Gupta", email: "neha.g@example.com", city: "Pune", phone: "9876512345", bookTitle: "THE LILY NETWORK", language: "english", format: "paperback", price: 300 }
];

export const getFormSubmissions = async () => {
  try {
    const submissionsRef = collection(db, 'formSubmissions');
    const q = query(submissionsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const submissions = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return submissions.length > 0 ? submissions : dummyFormSubmissions;
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return dummyFormSubmissions;
  }
};

export const addFormSubmission = async (submission) => {
  try {
    const submissionsRef = collection(db, 'formSubmissions');
    const docRef = await addDoc(submissionsRef, {
      ...submission,
      createdAt: new Date().toISOString(),
      date: new Date().toLocaleString()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding submission:", error);
    throw error;
  }
};

const dummyLeads = [
  { id: 201, date: "8/20/2026, 11:30:00 AM", name: "Rahul Verma", email: "rahul.v@example.com", choice: "Get Book 1" },
  { id: 202, date: "8/21/2026, 01:15:00 PM", name: "Priya Singh", email: "priya123@example.com", choice: "Get Both Books" },
];

export const getLeads = async () => {
  try {
    const leadsRef = collection(db, 'leads');
    const q = query(leadsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const leads = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return leads.length > 0 ? leads : dummyLeads;
  } catch (error) {
    console.error("Error fetching leads:", error);
    return dummyLeads;
  }
};

export const addLead = async (leadData) => {
  try {
    const leadsRef = collection(db, 'leads');
    const docRef = await addDoc(leadsRef, {
      ...leadData,
      createdAt: new Date().toISOString(),
      date: new Date().toLocaleString()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding lead:", error);
    throw error;
  }
};
