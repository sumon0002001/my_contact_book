"use server";
import db from "./db";
import Contact from "@/models/Contact";

export const getContacts = async () => {
  try {
    db.connect();
    const contacts = await Contact.find({});
    return contacts;
  } catch (error) {
    throw new Error("Failed to bring contacts" + error);
  }
};
