import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroImage from "../../assets/img/intl_icon.png";
// import BooksNotes from "../../../components/book/BooksNotes";
import BooksTitle from "../../../components/book/BooksTitle";

export default function Home() {
  return (
    <div>
      <BooksTitle />
      {/* <BooksNotes /> */}
    </div>
  );
}
