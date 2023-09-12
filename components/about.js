import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-neutral-100">
      <div className="max-w-[85rem] mx-auto px-4 ms:px-6 md:px-8 py-4 md:py-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h1 className="text-3xl mb-8">ჩვენს შესახებ</h1>
            <p className="leading-7">
              ჩვენ ვართ მაღალკვალიფიციური პროფესიონალების გუნდი საავტომობილო
              ინდუსტრიაში მრავალწლიანი გამოცდილებით. ჩვენი მძღოლები არიან
              სერტიფიცირებული, გაწვრთნილი და აღჭურვილია უახლესი ტექნოლოგიით,
              რათა გაუმკლავდნენ ნებისმიერი მანქანის ევაკუაციას სიზუსტით და
              ზრუნვით. ჩვენ ვამაყობთ იმით, რომ ვართ გამოსავალი მათთვის, ვისაც
              ესაჭიროება სასწრაფო დახმარება და სიმშვიდე სტრესულ სიტუაციებში.
              თქვენი მანქანის უსაფრთხოება ჩვენი მთავარი პრიორიტეტია. ჩვენ
              ვიყენებთ უახლეს აღჭურვილობას და ტექნიკას უსაფრთხო დატვირთვის,
              ტრანსპორტირებისა და გადმოტვირთვის უზრუნველსაყოფად.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="rounded-2xl w-72 h-96 md:w-[400px] md:h-[600px]">
              <Image
                width={400}
                height={600}
                src="/images/truck-girl.jpg"
                className="rounded-2xl"
                alt="about-us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
