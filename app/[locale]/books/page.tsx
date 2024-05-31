import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroImage from "../../assets/img/intl_icon.png";
import BooksNotes from "./widgets/package/BooksNotes";
import BooksTitle from "./widgets/package/BooksTitle";

export default function Home() {
  return (
    <div>
      {/* <BooksTitle /> */}
      <BooksNotes />
    </div>
  );
}
