import { defineStore } from 'pinia';
import { ref } from 'vue';
import { projectAuth } from '@/firebase/config';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  const isLoggedIn = ref(false);
  const role = ref(null);

  const login = async (email, password) => {
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      user.value = res.user;

      
      role.value = res.user.displayName === 'admin' ? 'admin' : 'user';
      isLoggedIn.value = true;

      return res;
    } catch (err) {
      throw err;
    }
  };

  const logout = async () => {
    await projectAuth.signOut();
    user.value = null;
    isLoggedIn.value = false;
    role.value = null;
  };

  return { user, isLoggedIn, role, login, logout };
});