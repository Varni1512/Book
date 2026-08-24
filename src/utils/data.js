import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';


export const generateSlug = (title) => {
  if (!title) return '';
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};


export const getBlogs = async () => {
  try {
    const blogsRef = collection(db, 'blogs');
    const q = query(blogsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const blogs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const addBlog = async (blog) => {
  try {
    const blogsRef = collection(db, 'blogs');
    const docRef = await addDoc(blogsRef, {
      ...blog,
      createdAt: new Date().toISOString(),
      date: blog.date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })
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

export const getFormSubmissions = async () => {
  try {
    const submissionsRef = collection(db, 'formSubmissions');
    const q = query(submissionsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const submissions = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return submissions;
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return [];
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

export const getLeads = async () => {
  try {
    const leadsRef = collection(db, 'leads');
    const q = query(leadsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const leads = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return leads;
  } catch (error) {
    console.error("Error fetching leads:", error);
    return [];
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
