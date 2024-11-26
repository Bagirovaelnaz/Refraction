import supabase from "../supabase";

export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Qeydiyyat xətası:", error.message);
    return null;
  }

  const user = data.user;
  if (user) {
    const { error: profileError } = await supabase
      .from("profiles")
      .insert({
        id: user.id, 
        email: user.email,
        role: "user", 
      });

    if (profileError) {
      console.error("Profil əlavə etmə xətası:", profileError.message);
      return null;
    }
  }

  return user;
};

// Giriş funksiyası
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Giriş xətası:", error.message);
    return null;
  }
  return data.user;
};
