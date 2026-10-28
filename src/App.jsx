import './index.css';

const navItems = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'مهمتنا', href: '#mission' },
  { label: 'كيف يعمل', href: '#how' },
  { label: 'التأثير', href: '#impact' },
  { label: 'تطوع', href: '#volunteer' },
  { label: 'تبرع', href: '#donate' },
];

const stats = [
  { value: 'يوميًا', label: 'وجبات طازجة معدة' },
  { value: 'تقليدية', label: 'مثل الثريد والمقلوبة' },
  { value: 'بكرامة', label: 'خدمة تليق بالإنسان' },
  { value: 'وسط عمّان', label: 'من قلب المجتمع' },
];

const missionCards = [
  {
    number: '١',
    title: 'مكافحة الجوع',
    description: 'تقديم وجبات مغذية يومية للعائلات التي تمر بأوقات صعبة وتحتاج إلى دعم مستمر.',
  },
  {
    number: '٢',
    title: 'حفظ الكرامة',
    description: 'خدمة الإنسان بكرامة واحترام، مع مراعاة الفارق بين المساعدة والاحتقار.',
  },
  {
    number: '٣',
    title: 'ترسيخ السخاء',
    description: 'إحياء روح الضيافة الأردنية وتقديم الطعام الذي يذكر الناس بالهوية والانتماء.',
  },
];

const steps = [
  {
    number: '١',
    title: 'دعم مستدام',
    text: 'تُجمع التبرعات والجهود الخيرية لتغطية تكلفة المواد الغذائية والمستلزمات اليومية.',
  },
  {
    number: '٢',
    title: 'تحضير يومي',
    text: 'يُعد الطهاة والجهود التطوعية وجبات تقليدية طازجة من مكونات مختارة بعناية.',
  },
  {
    number: '٣',
    title: 'توزيع بكرامة',
    text: 'تُوزع الوجبات في أجواء إنسانية مؤثرة، مع احترام لكل فرد واحتياجه.',
  },
  {
    number: '٤',
    title: 'حلقة خير',
    text: 'كل تبرع يفتح بابًا جديدًا للرحمة، وكل وجبة تعكس رسالة إنسانية متواصلة.',
  },
];

const impactCards = [
  { title: 'تقليدية', value: 'الثريد • المقلوبة' },
  { title: 'يومياً', value: 'تحضير طازج' },
  { title: 'محلي', value: 'خدمة عمّان' },
  { title: 'أمل', value: 'مع كرامة' },
];

const volunteerBenefits = [
  'إعداد الوجبات وتوزيعها',
  'فرز المواد الغذائية والتجهيز',
  'التواصل المجتمعي والتنسيق',
  'التطوع في الفعاليات الخيرية',
];

const donateBenefits = [
  'تبرعات شهرية مستمرة',
  'رعاية وجبة كاملة',
  'دعم اللوازم والمستلزمات',
  'مساندة العمل الخيري اليومي',
];

function App() {
  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#1f1f1c]" dir="rtl">
      <header className="sticky top-0 z-50 border-b border-[#efe2d0] bg-[#fffaf4]/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="العودة إلى الرئيسية">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#bf6a45] to-[#f0c57d] text-xl font-black text-white shadow-warm">
              و
            </div>
            <div>
              <div className="text-lg font-extrabold text-[#1f1f1c]">وقف ثريد</div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#6f655d]">WAQF THAREED</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-[#584e49] md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[#b9623d]">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#donate"
            className="hidden rounded-full bg-[#bf6a45] px-5 py-3 text-sm font-extrabold text-white shadow-warm transition hover:translate-y-[-1px] md:inline-flex"
          >
            ساهم الآن
          </a>
        </div>
      </header>

      <main id="home">
        <section className="overflow-hidden py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <span className="inline-flex rounded-full bg-[#f7e7d4] px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-[#6a4029]">
                وسط عمّان • قرب المسجد الحسيني
              </span>
              <h1 className="mt-6 max-w-xl text-4xl font-black leading-[1.15] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
                طعام دافئ،
                <span className="block text-[#9b4d2b]">كرامة لا تُباع، وضمير لا ينام.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a55]">
                مؤسسة خيرية تُحيي روح الضيافة الأردنية، وتعمل على محاربة الجوع وحفظ الكرامة الإنسانية من خلال
                إعداد وتوزيع وجبات تقليدية مجانية، خاصة الثريد والمقلوبة، لذوي الحاجة في قلب عمّان.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#donate"
                  className="inline-flex rounded-full bg-[#bf6a45] px-6 py-3.5 text-base font-extrabold text-white shadow-warm transition hover:translate-y-[-1px]"
                >
                  تبرع اليوم
                </a>
                <a
                  href="#mission"
                  className="inline-flex rounded-full bg-[#eff4f2] px-6 py-3.5 text-base font-extrabold text-[#254a44] transition hover:translate-y-[-1px]"
                >
                  تعرف على مهمتنا
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-[#254a44]">
                <li className="rounded-full border border-[#d8e4df] bg-[#f4f9f7] px-4 py-2">وجبات يومية طازجة</li>
                <li className="rounded-full border border-[#d8e4df] bg-[#f4f9f7] px-4 py-2">مأكولات تقليدية</li>
                <li className="rounded-full border border-[#d8e4df] bg-[#f4f9f7] px-4 py-2">خدمة بكرامة</li>
              </ul>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[540px]">
                <div className="rounded-[36px] border border-[#f1ddc4] bg-gradient-to-br from-[#fffaf4] to-[#f4e7d6] p-4 shadow-warm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#e06d5a]" />
                    <span className="h-3 w-3 rounded-full bg-[#f3cc74]" />
                    <span className="h-3 w-3 rounded-full bg-[#7cad86]" />
                  </div>

                  <div className="grid gap-6 rounded-[28px] bg-[#fef9f3] p-6 sm:grid-cols-[1.1fr_0.9fr] sm:p-8">
                    <div className="relative mx-auto flex h-[220px] w-[220px] items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,#f4d582,#cc9850_60%,#b06d2c_100%)] shadow-[inset_0_-18px_24px_rgba(91,56,19,0.18)]" />
                      <div className="absolute inset-[28px] rounded-full border-[10px] border-[#815521]/25 bg-[#f8e8b3]/80" />
                      <div className="absolute inset-x-8 top-16 h-6 rounded-full bg-[#73a368]/80" />
                      <div className="absolute left-12 top-16 h-6 w-20 rounded-full bg-[#7ba53f]/80 rotate-[-18deg]" />
                      <div className="absolute left-20 top-24 h-6 w-24 rounded-full bg-[#7ba53f]/80 rotate-[12deg]" />
                      <div className="absolute right-14 top-20 h-5 w-16 rounded-full bg-[#7aa862]/80 rotate-[18deg]" />
                    </div>

                    <div className="flex flex-col justify-center">
                      <p className="text-[11px] font-extrabold tracking-[0.2em] text-[#895133]">وجبة اليوم</p>
                      <h2 className="mt-3 text-3xl font-black leading-tight text-[#224b46]">الثريد <span className="block">والمقلوبة</span></h2>
                      <p className="mt-4 text-sm font-bold text-[#5f5a55]">طازجة، دافئة، وموفّرة بيدٍ رحيمة.</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-2 top-12 rounded-2xl border border-[#efe1d8] bg-white/80 px-4 py-3 shadow-warm backdrop-blur-sm">
                  <p className="text-[10px] font-extrabold tracking-[0.16em] text-[#834d2e]">وجبات يومية</p>
                  <p className="text-sm font-black text-[#234d4c]">تحضير متواصل</p>
                </div>

                <div className="absolute -bottom-4 left-0 rounded-2xl border border-[#efe1d8] bg-white/85 px-4 py-3 shadow-warm backdrop-blur-sm">
                  <p className="text-[10px] font-extrabold tracking-[0.16em] text-[#834d2e]">خدمة محلية</p>
                  <p className="text-sm font-black text-[#234d4c]">وسط عمّان</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fff9f4] py-6">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-[#f2e0cc] bg-white/80 px-6 py-5 text-center shadow-warm">
                <div className="text-2xl font-black text-[#9b4d2b]">{item.value}</div>
                <div className="mt-1 text-sm font-bold text-[#5f5a55]">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="mission" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-[#edf4f1] px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-[#254a44]">
                مهمتنا
              </span>
              <h2 className="mt-5 text-4xl font-black text-[#1f1f1c] sm:text-5xl">مكافحة الجوع بكرامةٍ ورحمةٍ</h2>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-lg leading-8 text-[#5f5a55]">
                  نؤمن أن الطعام ليس مجرد رزق، بل هو حق إنساني يليق بكل شخص. لذلك عملت مؤسسة وقف ثريد على بناء
                  مشروع خيري يقدّم وجبات مجانية، بالاعتماد على كرامة الإنسان وتقدير احتياجه، من قلب المجتمع الأردني.
                </p>
                <p className="mt-5 text-lg leading-8 text-[#5f5a55]">
                  تُمثل الوجبات اليومية رسالة إنسانية واضحة: لا أحد يُترك جائعًا، ولا أحد يُعامل كأنه أقلُّ قيمة.
                  من خلال الطعام التقليدي، نمد يد العون إلى الأسر التي تمر بأوقات صعبة، ونصل إلى الناس بأملٍ حقيقي.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {missionCards.map((card) => (
                    <div key={card.number} className="rounded-[24px] border border-[#f1e4d2] bg-white p-5 shadow-warm">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7e7d4] text-lg font-black text-[#9b4d2b]">
                        {card.number}
                      </div>
                      <h3 className="text-xl font-extrabold text-[#1f1f1c]">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#5f5a55]">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-md rounded-[28px] bg-gradient-to-br from-[#234d4c] to-[#3d6d62] p-7 text-white shadow-warm">
                  <p className="text-[10px] font-extrabold tracking-[0.2em] text-[#dfeee9]">رسالتنا</p>
                  <h3 className="mt-4 text-3xl font-black leading-tight">وجبات دافئة، قلوب رحيمة، مجتمع أقوى.</h3>
                  <ul className="mt-6 space-y-4 text-base font-medium text-[#edf6f4]">
                    <li className="flex items-center gap-3"><span className="text-[#f0c57d]">✓</span> وجبات مجانية</li>
                    <li className="flex items-center gap-3"><span className="text-[#f0c57d]">✓</span> خدمة إنسانية</li>
                    <li className="flex items-center gap-3"><span className="text-[#f0c57d]">✓</span> كرامة للجميع</li>
                    <li className="flex items-center gap-3"><span className="text-[#f0c57d]">✓</span> استدامة في العطاء</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="bg-[#f8ecdf] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-[#f0e5d8] px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-[#6a4029]">
                كيف يعمل المشروع
              </span>
              <h2 className="mt-5 text-4xl font-black text-[#1f1f1c] sm:text-5xl">إحسان مستدام، وطعام طازج يوميًا</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="rounded-[28px] border border-[#eadac2] bg-white/80 p-6 shadow-warm">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7e7d4] text-xl font-black text-[#9b4d2b]">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1f1f1c]">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#5f5a55]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <span className="inline-flex rounded-full bg-[#edf4f1] px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-[#254a44]">
                أثرنا
              </span>
              <h2 className="mt-5 text-4xl font-black text-[#1f1f1c] sm:text-5xl">خدمة المجتمع تبدأ بوجبة تُشعر بالرحمة.</h2>
              <p className="mt-6 text-lg leading-8 text-[#5f5a55]">
                إن جوهر عمل وقف ثريد هو أن يلتقي الطعام بالإنسان، فيأخذ من الجوع رزقًا، ومن الضيق أملًا، ومن الوحدة
                ركنًا جديدًا للطمأنينة. كل وجبة تُعدّ بيدٍ متعاطفة وتُوزع في أجواء تهدف إلى حفظ الكرامة.
              </p>
              <p className="mt-5 text-lg leading-8 text-[#5f5a55]">
                نعمل يوميًا على بناء شبكة خيرية تُعزّز فكرة المجتمع الواعي، وتمكين الشباب والمستفيدين من روح التعاون.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {impactCards.map((card) => (
                <div key={card.title} className="rounded-[24px] border border-[#f2e0cc] bg-gradient-to-br from-[#fffdf9] to-[#f7ebd9] p-6 shadow-warm">
                  <div className="text-xl font-black text-[#9b4d2b]">{card.title}</div>
                  <div className="mt-2 text-lg font-bold text-[#234d4c]">{card.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer" className="bg-[#fff9f4] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-[#edf4f1] px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-[#254a44]">
                تطوّع معنا
              </span>
              <h2 className="mt-5 text-4xl font-black text-[#1f1f1c] sm:text-5xl">انضم إلى رحمة المجتمع</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[30px] border border-[#f1e4d2] bg-white p-8 shadow-warm">
                <h3 className="text-3xl font-black text-[#1f1f1c]">التطوع</h3>
                <p className="mt-4 text-base leading-8 text-[#5f5a55]">
                  كل يدٍ تُمدّ لخيرنا تضيف معنىً جديدًا للمشروع، وتُسهم في حمل الطعام إلى من يحتاجه بكرامة واهتمام.
                </p>
                <ul className="mt-6 space-y-4 text-base font-medium text-[#4f4a48]">
                  {volunteerBenefits.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f7e7d4] text-[#9b4d2b]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[30px] border border-[#f1d7b6] bg-gradient-to-br from-[#fff7f1] to-[#f5e0c5] p-8 shadow-warm">
                <h3 className="text-3xl font-black text-[#1f1f1c]">التبرع</h3>
                <p className="mt-4 text-base leading-8 text-[#5f5a55]">
                  بفضل دعمكم، نستطيع شراء المكونات الطازجة وتجهيز وجبات يومية تلامس احتياجات الأسر وتفتح باب الأمل.
                </p>
                <ul className="mt-6 space-y-4 text-base font-medium text-[#4f4a48]">
                  {donateBenefits.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e9f2ef] text-[#234d4c]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="donate" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 rounded-[32px] bg-gradient-to-r from-[#f6ebdd] to-[#ebd7b6] p-8 shadow-warm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="inline-flex rounded-full bg-[#fbf4ea] px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-[#6a4029]">
                  دعم مستمر
                </span>
                <h2 className="mt-5 text-4xl font-black text-[#1f1f1c] sm:text-5xl">ساعدنا في إطعام من يحتاج.</h2>
              </div>

              <a
                href="mailto:hello@waqfthareed.org"
                className="inline-flex rounded-full bg-[#bf6a45] px-7 py-4 text-base font-extrabold text-white shadow-warm transition hover:translate-y-[-1px]"
              >
                تواصل للتبرع
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1b241f] py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#bf6a45] to-[#f0c57d] text-xl font-black text-white">
                و
              </div>
              <div>
                <div className="text-lg font-extrabold">وقف ثريد</div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#cdd6d2]">WAQF THAREED</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-white">مهمتنا</h3>
            <p className="mt-3 text-sm leading-7 text-[#dfe8e4]">مكافحة الجوع وحفظ الكرامة الإنسانية من خلال وجبات تقليدية مجانية.</p>
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-white">الموقع</h3>
            <p className="mt-3 text-sm leading-7 text-[#dfe8e4]">وسط عمّان، الأردن<br />قرب المسجد الحسيني</p>
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-white">الدعم</h3>
            <p className="mt-3 text-sm leading-7 text-[#dfe8e4]">تطوع • تبرع • عطاء مجتمعي</p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-sm text-[#dfe8e4] sm:px-6 lg:px-8">
          © 2026 وقف ثريد. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}

export default App;
