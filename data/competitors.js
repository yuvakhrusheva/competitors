// AUTO-GENERATED
window.COMPETITORS_DATA = {
  "features": [
    {
      "id": "student_onboarding",
      "name": "Старт ученика",
      "category": "Ученик",
      "description": "Как ученик начинает работу: диагностика, онбординг, точка входа в платформу"
    },
    {
      "id": "student_home",
      "name": "Главная ученика",
      "category": "Ученик",
      "description": "Главный экран ученика: что видит, как навигирует, какие задачи доступны"
    },
    {
      "id": "lesson_input",
      "name": "Урок: контент и ввод",
      "category": "Ученик",
      "description": "Формат подачи материала и способы ввода (текст, рукопись, мат. клавиатура, видео)"
    },
    {
      "id": "ai_hint_on_demand",
      "name": "AI-помощь по запросу",
      "category": "Ученик",
      "description": "Hint и scaffolding по инициативе ученика: кнопки помощи, чат, контекстные подсказки"
    },
    {
      "id": "ai_proactive",
      "name": "AI проактивный",
      "category": "Ученик",
      "description": "AI сам инициирует помощь (триггеры: пауза, ошибки подряд, паттерн черновика)"
    },
    {
      "id": "ai_on_error",
      "name": "AI на ошибке (remediation)",
      "category": "Ученик",
      "description": "Как AI реагирует на ошибку: анализ типа (slip vs misconception), тип подсказки"
    },
    {
      "id": "ai_reflection",
      "name": "Рефлексия и контроль",
      "category": "Ученик",
      "description": "Механизмы рефлексии (explain-back), mastery control, anti-cheating"
    },
    {
      "id": "student_progress",
      "name": "Прогресс ученика",
      "category": "Ученик",
      "description": "Видимый ученику прогресс: mastery tracking, knowledge map, achievement"
    },
    {
      "id": "teacher_home",
      "name": "Главная учителя",
      "category": "Учитель",
      "description": "Главный экран учителя: управление классами, библиотека, дашборд"
    },
    {
      "id": "live_class_monitoring",
      "name": "Live-мониторинг класса",
      "category": "Учитель",
      "description": "Что учитель видит в реальном времени: ход решений, heat map, alerts"
    },
    {
      "id": "student_profile",
      "name": "Карточка ученика",
      "category": "Учитель",
      "description": "Индивидуальный профиль с историей прогресса, ошибок, misconceptions"
    },
    {
      "id": "misconception_map",
      "name": "Карта заблуждений",
      "category": "Учитель",
      "description": "Агрегированная карта misconceptions по классу — не «процент правильных»"
    },
    {
      "id": "ai_content_gen",
      "name": "AI генерация контента",
      "category": "Учитель",
      "description": "AI помогает создавать задания, планы уроков, дифференцированный контент"
    },
    {
      "id": "ai_insights",
      "name": "AI-инсайты учителю",
      "category": "Учитель",
      "description": "Рекомендации: кому помочь, что объяснить фронтально, pacing"
    },
    {
      "id": "group_adaptation",
      "name": "Адаптация для групповой работы",
      "category": "Учитель",
      "description": "Поддержка малых групп внутри класса: small-group activities, дифференцированные задания для подгрупп, live grouping"
    },
    {
      "id": "parent_report",
      "name": "Отчёт родителям",
      "category": "Учитель",
      "description": "Автоматические или AI-генерированные отчёты для родителей"
    }
  ],
  "competitors": [
    {
      "id": "cerebry",
      "name": "Cerebry",
      "segment": "B2B / B2G школы",
      "age_range": "K-12 → университет",
      "geography": "Сингапур → SEA · MENA · глобально",
      "evidence": "small trial SUTD 1 мес · ACM ICEEEL'24 case · не RCT",
      "ai_moat": "proprietary deductive engine (axiom-based) + LLM-layer · SUTD research",
      "url": "https://cerebry.co",
      "summary_short": "AI-движок генерирует уникальные задачи на лету. Step-by-step input. Дедуктивная логика первого порядка.",
      "summary_long": "AI-движок генерирует уникальные задачи на лету — двое учеников никогда не видят одно задание. Вместо традиционного графа знаний — набор аксиом логики первого порядка. Step-by-step input: ребёнок вводит промежуточные шаги, а не только финальный ответ. Math keyboard + Handwriting Recognition. Error analysis: разделяет Calculation (логика верна, проверь расчёты) и Conceptual (возврат к базовому концепту). Mastery: 3–5 задач подряд без подсказок и ошибок. Time on Task: решил слишком быстро → контрольный вопрос с изменёнными параметрами. Учитель выбирает тему из учебного плана → AI-ассистент «Ишка» генерирует задания: не шаблонная подстановка переменных, а настоящая генерация строго по материалам, загруженным учителем. Гибридная модель: планшеты для школ (работа в классе под учителем) + планшеты для семей (дома самостоятельно). Real-time дашборд учителя: кто уже приступил к заданиям, распределение учеников по уровням сложности. Нет фиксированного числа задач за сессию — определяется планом учителя. Система адаптируется под любой загруженный контент — от начальной до высшей школы.",
      "strengths": [
        "Генерация задач на лету из аксиом — невозможно списать у соседа",
        "Step-by-step input: AI видит ход решения, а не только ответ",
        "Time on Task — встроенная защита от списывания",
        "AI «Ишка» генерирует задания из материалов учителя — настоящая генерация, не шаблоны",
        "Гибридная модель: класс + дом"
      ],
      "weaknesses": [
        "Нет публичных независимых RCT — уязвимость при B2G продаже",
        "Нет данных по конкретным триггерам проактивности (пороги паузы, числа ошибок)"
      ],
      "open_questions": [
        "[P0] Лицензия школе целиком или per-seat? Кто платит — школа, родитель, министерство?",
        "[на ресёрч] Глубже изучить внутреннее устройство генератора задач (аксиомы первого порядка vs. подстановка)"
      ],
      "screenshots": [
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-08 123954.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-08 124311.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-08 124608.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-08 135401.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-08 135541.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-08 135716.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-08 135821.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-08 135855.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-08 135928.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 092800.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 092822.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 092902.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 092923.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 092951.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 093437.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 093552.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 093705.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 093855.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 093946.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 094019.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 094120.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 094155.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 094314.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 094335.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 094651.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/cerebry/Снимок экрана 2026-05-21 094800.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        }
      ],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "Этап «Актуализация»: разминочные вопросы → AI выявляет пробелы. Тематические рамки задаёт учитель."
        },
        "student_home": {
          "status": "yes",
          "notes": "Список activities/задач от учителя. Step-by-step progress по теме."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Step-by-step input — ребёнок вводит промежуточные шаги, не только финал. Math keyboard + Handwriting Recognition."
        },
        "ai_hint_on_demand": {
          "status": "yes",
          "notes": "Контекстные кнопки помощи (3 типа): «Намекни на следующий шаг», «Проверь мои вычисления», «Покажи теорию». Не свободный чат."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "AI вмешивается при ошибке: анализирует шаг, даёт подсказку специфичную для этапа. Не свободно proactive — больше реактивно."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Error analysis: 2 типа ошибок. Calculation → «логика верна, проверь расчёты». Conceptual → возврат к объяснению базового концепта."
        },
        "ai_reflection": {
          "status": "yes",
          "notes": "Time on Task защита от списывания: если решил слишком быстро — контрольный вопрос с изменёнными параметрами. Mastery: 3-5 задач подряд без подсказок."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Mastery Score визуально. Real-time progress на дашборде учителя (доступ ребёнка не подтверждён)."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Дашборд классов с тематическим планом школы (после загрузки учителем)."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "Real-time данные на дашборде во время урока — кто на каком узле, кто застрял."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Индивидуальная карточка с прогрессом по узлам."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "Error analysis по типам: calculation vs conceptual. Дашборд учителя."
        },
        "ai_content_gen": {
          "status": "yes",
          "notes": "Учитель загружает school materials → AI генерирует задания по тематическому плану."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "Real-time → дашборд учителя: кто на каком узле, кто застрял. Mastery threshold для перехода."
        },
        "group_adaptation": {
          "status": "no",
          "notes": "Нет (индивидуальная практика)"
        },
        "parent_report": {
          "status": "unknown",
          "notes": "нет публичной информации о parent reports."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "squirrel_ai",
      "name": "Squirrel AI",
      "segment": "B2B2C центры + B2G школы",
      "age_range": "K-12 (4–18 лет)",
      "geography": "Китай → США (выход 2026)",
      "evidence": "gold-standard · SRI International · npj Science of Learning · 4.19× learning gains",
      "ai_moat": "proprietary LAM + 30K nano-knowledge points · 10B учебных датапоинтов · 24M студентов",
      "url": "https://squirrelai.com",
      "summary_short": "K-12 адаптивная платформа с 30K нано-узлами + 3,000+ физ. центров в Китае. Самый proactive AI.",
      "summary_long": "Самый масштабный проект адаптивного обучения в мире. Математика разбита на 30 000+ нано-узлов знаний (vs ~1 000 у ALEKS, ~3 000 в учебнике). MCM-модель: анализирует не только правильность, но и когнитивный паттерн (Methodology, Capacity, Mode of Thinking). Если ребёнок застрял — система «проваливается» вниз по графу, находит микро-точку из прошлых лет. Связи между узлами формируют вручную 200+ методистов. Diagnostic Test: 10–15 вопросов, точность 90% по уровню. 3 этапа Mastery: Recognition → Application → Strategy. Все три = усвоено. Multimodal ввод: рукопись через камеру/стилус, анализ черновика. Emotion detection через камеры (в пилотах). Guinness World Record. 24M+ студентов. 4 000+ физических центров в Китае. RCT: SRI International + npj Science of Learning. 4.19× learning gains. Формат занятий: 60 минут, 6 детей + 1 ментор. Ментор не ведёт урок — подходит к ребёнку только при прямой необходимости. Занятие проходит без живого учителя (AI-led). Модель продаж: франшиза для учебных центров + активная работа со школами (оба канала реальны).",
      "strengths": [
        "Gold-standard RCT — единственная компания с peer-reviewed публикацией в npj Science of Learning",
        "30K+ узлов — максимальная атомизация в индустрии, ручная разметка методистами",
        "Highest defensibility: собственный LAM + 10B учебных датапоинтов, не воспроизвести без лет данных",
        "Multimodal анализ черновика (камера + стилус)",
        "Доказанная модель AI-led урока без живого учителя (6 детей + ментор-наблюдатель)"
      ],
      "weaknesses": [
        "Сложный выход за пределы Китая: большинство выручки — собственные центры, не школы",
        "Нет публичного API — интеграция только через Squirrel-инфраструктуру",
        "Emotion detection через камеры — privacy concerns в западных рынках"
      ],
      "open_questions": [
        "[на ресёрч] Сколько узлов графа приходится на одну тему 4 класса (из 30 000+ общих)?",
        "[на ресёрч] Конкретные триггеры (пауза N сек, M ошибок подряд) — нет публичных данных",
        "[на ресёрч] Для каких именно возрастов работает AI-led урок — подтвердить диапазон"
      ],
      "screenshots": [
        {
          "file": "screenshots/squirrel_ai/Снимок экрана 2026-05-08 140053.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/squirrel_ai/Снимок экрана 2026-05-21 095016.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/squirrel_ai/Снимок экрана 2026-05-21 095040.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/squirrel_ai/Снимок экрана 2026-05-21 095124.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/squirrel_ai/Снимок экрана 2026-05-21 095151.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        }
      ],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "Diagnostic Test 10-15 вопросов в начале сессии → точность 90% по уровню. Порог 25 взаимодействий → ML управляет."
        },
        "student_home": {
          "status": "yes",
          "notes": "Стартовое окно: диагностика ИЛИ образовательные материалы. Knowledge graph с актуальным фрагментом, статусы навыков, лекции, практика."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Контент: видео от «звёздного учителя» 3-8 мин + практика на планшете. Multimodal ввод: рукопись через камеру/стилус."
        },
        "ai_hint_on_demand": {
          "status": "yes",
          "notes": "Hint при запросе есть, но фокус на проактивности. ИИ-аватар запускает диалог сам."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "Самый proactive из всех. Триггеры: пауза N сек, M ошибок подряд, аномальный паттерн черновика. ИИ-аватар запускает диалог. Emotion detection через камеры (в пилотах)."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Multimodal анализ ошибки: AI помечает конкретное число в черновике, просит пересчитать. Видит «дыру» 3-летней давности → блокирует движение."
        },
        "ai_reflection": {
          "status": "yes",
          "notes": "3 этапа Mastery: Recognition → Application → Strategy. Только все три = усвоено."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Knowledge Map — ребёнок видит освоенные узлы, текущий, и заблокированные (3 этапа Mastery)."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Дашборд классов в центре. Real-time мониторинг учеников за планшетами."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "Real-time мониторинг + уведомления Data Analyst в физ. центре. ИИ помечает emotion/struggle."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Карточка ученика с историей Knowledge Map. Mastery по узлам, время сессий, аномалии."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "«80% класса — пробел в теме X» → фронтальное объяснение 10 мин."
        },
        "ai_content_gen": {
          "status": "no",
          "notes": "нет специфической функции — контент готов от методистов (200+ экспертов)."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "Dashboard учителя видит «80% класса застряло на теме X». Recommended remediation."
        },
        "group_adaptation": {
          "status": "no",
          "notes": "Нет (индивидуальная траектория)"
        },
        "parent_report": {
          "status": "yes",
          "notes": "Отчёт родителю в B2C центрах. Mastery progress по графу."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "khanmigo",
      "name": "Khanmigo",
      "segment": "B2C-free + B2G districts",
      "age_range": "3–12 grades US (8–18 лет)",
      "geography": "Глобально · 266+ округов США",
      "evidence": "correlational · Newark 3-year panel · J-PAL RCT в работе",
      "ai_moat": "на чужом LLM (GPT-4 → Gemini Jan 2026) · стек легко повторить",
      "url": "https://khanmigo.ai",
      "summary_short": "Бесплатный сократический AI-тьютор для всех учителей США через Microsoft grant. На GPT/Gemini.",
      "summary_long": "Khan Academy — крупнейшая бесплатная edu-платформа. Khanmigo — её AI-тьютор. Сократический метод: ИИ не даёт ответ, задаёт вопрос «Что ты пробовал?». Chain of Thought: проактивно обращается после паузы или 2 ошибок подряд. Anti-cheating счётчик: выпрашивал ответ >3 раз → помечается учителю. Persona-персонализация: связывает математику с интересами ребёнка (футбол, Minecraft). Для учителей (B2G): генератор контента, образовательных программ для детей с особыми потребностями, дашборд класса — кто не справился, распространённые ошибки, рекомендации. Бесплатен для всех учителей США (грант Microsoft). 266 округов. B2G пакет (платная версия): продвинутые репорты для учителя + дашборд состояния класса в реальном времени. Может работать как полноценная учебная программа (curriculum), но строго в рамках математики. Handwriting Recognition: распознаёт хорошо, справляется с дробями и геометрией (ввод сложнее стандартного). AI стек: GPT-4 → переход на Gemini январь 2026. Low defensibility — стек легко воспроизвести.",
      "strengths": [
        "Бесплатен для всех учителей США (грант Microsoft) — нет барьера входа",
        "Сократический метод: ИИ задаёт вопросы вместо ответов, развивает мышление",
        "Может работать как полноценный math curriculum",
        "Correlational данные из Newark 3-year panel, J-PAL RCT в работе",
        "Встроен в Copilot (Microsoft) — огромный дистрибуционный канал"
      ],
      "weaknesses": [
        "Low defensibility: на GPT/Gemini, стек легко воспроизвести конкурентам",
        "Correlational data, не RCT — слабее чем Eedi/Squirrel",
        "Конкретные пороги триггеров (пауза N сек) не публикуются"
      ],
      "open_questions": [
        "[P0] Как выглядит путь ученика без и с Khanmigo — где реальная разница?",
        "[P0] Какая метрика качества диалога — LLM-judge или иное?",
        "[P1] Конкретные временные/количественные пороги для проактивных триггеров?",
        "[на ресёрч] Что за показатель «400 процентов» — раскопать источник и методологию"
      ],
      "screenshots": [
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-21 102417.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-21 102449.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-21 102456.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-21 102544.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-21 102636.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-21 102649.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-21 102716.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-21 103751.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 151323.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 151349.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 151356.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 151405.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 151440.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 151513.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 151738.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 151915.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 152018.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 152030.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 152354.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 152446.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 152520.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/khanmigo/Снимок экрана 2026-05-22 152642.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        }
      ],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "Lesson Hook: проблемный вопрос/задача под интересы класса. Persona-персонализация (футбол, Minecraft)."
        },
        "student_home": {
          "status": "yes",
          "notes": "Khan Academy course interface — видео, упражнения, mastery dashboard. Khanmigo как чат-виджет."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Видео 5-10 мин от Khan + адаптивные задания. Speech-to-Text «диктовка» — ребёнок проговаривает рассуждения."
        },
        "ai_hint_on_demand": {
          "status": "yes",
          "notes": "Сократический метод через Chain of Thought. ИИ не даёт ответ — задаёт вопрос «Что ты пробовал?». Доступ через chat-widget."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "Сократический метод proactive: после паузы или 2 ошибок подряд AI обращается сам. Anti-cheating watcher постоянно."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Через Chain of Thought: «Алгоритм безупречен, но в строке 2 описка» — calc. «Складываешь дроби как обычные числа? Помнишь про куски пиццы?» — conceptual."
        },
        "ai_reflection": {
          "status": "yes",
          "notes": "Anti-cheating счётчик: если ребёнок «выпрашивал» ответ >3 раз подряд → помечается в отчёте учителю. Цель — «качество диалога»."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Khan Academy mastery system — Pie chart прогресса по skills (видимый ученику). Mastery levels через item difficulty."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Khanmigo teacher dashboard. Classroom Motivation & Queues + Next Item рекомендации."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "Classroom Pulse — общая динамика класса в реалтайме. Кто продуктивен, кто в режиме «тупика»."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Khanmigo Summaries: краткое резюме AI по каждому ученику. «Иван активен в тригонометрии, путает синус/косинус»."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "Распространённые ошибки в Classroom Pulse summary."
        },
        "ai_content_gen": {
          "status": "yes",
          "notes": "Khanmigo генератор контента: задания, плейлисты под класс. Differentiated content по уровням сложности."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "Next Item — ИИ выстраивает очередь задач для учителя, подсказывает «к кому подойти прямо сейчас»."
        },
        "group_adaptation": {
          "status": "no",
          "notes": "Нет встроенной фичи; учитель делит группы вне платформы"
        },
        "parent_report": {
          "status": "no",
          "notes": "нет специфической функции parent reports — родитель видит Khan Academy mastery dashboard напрямую."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "magma_math",
      "name": "Magma Math",
      "segment": "B2G школы supplemental",
      "age_range": "K-12 (5–18 лет)",
      "geography": "Sweden → 30+ штатов США · UK",
      "evidence": "vendor-RCT Sweden 2022 n=2,111 · «+400%» без методологии — red flag",
      "ai_moat": "proprietary handwriting OCR + heat-map misconception detector",
      "url": "https://magmamath.com",
      "summary_short": "K-12 supplemental с handwriting OCR canvas. Учитель видит ход мысли каждого ребёнка в реалтайме.",
      "summary_long": "K-12 платформа из Швеции (2015). Killer feature: Student Canvas — ребёнок пишет решение как на бумаге, учитель видит ход мысли в реальном времени. Handwriting OCR + анализ черновиков и зачёркиваний. Каждая задача в 3 уровнях сложности. Библиотека 40 000+ задач. Для учителя: Common Error (auto-summary типичного misconception по задаче), Replay работы ученика, heat map класса. AI-driven feedback: подсказка по конкретному шагу, не ответ. Философия: AI как инструмент для УЧИТЕЛЯ, не замена педагога. Supplemental, не full curriculum. Интеграция с Building Thinking Classrooms (Liljedahl) и Bridges curriculum. Серия A $40M (Five Elms Capital, 2024) + $10M follow-on (октябрь 2025). Grант Gates Foundation. USA 30+ штатов + UK.",
      "strengths": [
        "Student Canvas + handwriting OCR — учитель видит ход мысли, а не только ответ",
        "Common Error: auto-агрегация типичного misconception класса по конкретной задаче",
        "Replay работы ученика: учитель проигрывает как ребёнок шёл к ответу",
        "Позиционирование AI как инструмент для учителя, а не замена педагога"
      ],
      "weaknesses": [
        "«400% math outcomes» — звучит подозрительно, нет публичной методологии (⚠ red flag)",
        "Supplemental (поверх программы), не full curriculum — ограничивает позиционирование",
        "Pricing полностью закрыт",
        "Глубина handwriting recognition на «грязных» сценариях (детский почерк, geometry) не подтверждена"
      ],
      "open_questions": [
        "[P0] «400% math outcomes» — какая методология, контрольная группа?",
        "[P0] Насколько точно распознаёт детский почерк, fractions, geometry diagrams?",
        "[P0] Pricing — запросить sales для понимания экономики на ученика/год",
        "[P1] Может ли работать как full curriculum или ограничения архитектурные?",
        "[P1] Интеграция с Building Thinking Classrooms — реальная методическая или маркетинг?"
      ],
      "screenshots": [
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-14 141734.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-21 092124.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-21 092142.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 091507.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 091555.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 091609.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 091631.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 091640.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 091711.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 091824.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 091948.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092252.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092341.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092404.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092440.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092506.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092531.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092555.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092615.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092715.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092807.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092852.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092930.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 092940.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 093033.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 093041.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 093130.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 093157.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 093213.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 093317.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 093600.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 093630.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 093729.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 093834.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 094621.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/magma_math/Снимок экрана 2026-05-22 094630.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        }
      ],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "Учитель назначает задачи. Нет отдельного диагностического теста — assessment встроен в работу."
        },
        "student_home": {
          "status": "yes",
          "notes": "Список назначенных задач. Student Canvas открывается при выборе задачи."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Student Canvas — цифровой лист бумаги. Пишет от руки (handwriting OCR) ИЛИ печатает. Авто-проверка обоих форматов."
        },
        "ai_hint_on_demand": {
          "status": "yes",
          "notes": "AI-driven feedback — подсказка по конкретному шагу, не ответ. Доступен при handwriting OCR ошибке."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "AI постоянно анализирует ход решения. Immediate feedback при handwriting OCR. Proactive — учитель видит каждый шаг в реалтайме."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "AI проверяет каждый шаг. Common Error — auto-summary типичной ошибки класса. Replay работы ученика учителю."
        },
        "ai_reflection": {
          "status": "yes",
          "notes": "Replay работы ученика как видео — учитель видит весь ход мысли. Anti-cheating через визуальный анализ."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Видимый прогресс по выполненным задачам. Процент освоения навыков на дашборде учителя."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Список классов + библиотека 40,000+ задач + heat map по классам."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "Учитель одновременно видит ввод на ВСЕХ планшетах одновременно. Heat map по классу."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Карточка ученика с replay его работ + статистикой."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "Common Error — auto-summary типичного misconception класса по конкретной задаче."
        },
        "ai_content_gen": {
          "status": "yes",
          "notes": "Учитель выбирает из библиотеки 40,000+ задач ИЛИ создаёт свою (без AI-генерации)."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "Personalized recommendations: учителю — кому какие задачи назначить дальше. Pacing рекомендации."
        },
        "group_adaptation": {
          "status": "partial",
          "notes": "Частично — Live Activity для разбора работы групп; педагогика Building Thinking Classrooms подразумевает работу у досок"
        },
        "parent_report": {
          "status": "no",
          "notes": "нет специфической функции parent reports."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "happy_numbers",
      "name": "Happy Numbers",
      "segment": "B2G школы + free-tier для индивид. учителя",
      "age_range": "PreK–5 (4–11 лет)",
      "geography": "США (~2M учеников)",
      "evidence": "ESSA Tier III promising · Union SD multi-year case",
      "ai_moat": "rule-based scaffolding (НЕ LLM) · детерминированный движок без галлюцинаций",
      "url": "https://happynumbers.com",
      "summary_short": "PreK-5 полная программа с rule-based AI и манипулятивами. Pedagogy-first, не LLM-собеседник.",
      "summary_long": "Полноценный учебный продукт PreK–5 для школ США. Не «помощник», а самостоятельная программа: пока учитель работает с малой группой, Happy Numbers ведёт остальной класс по индивидуальной траектории (station rotation модель). Quantile-based диагностика → стартовая точка. Сессия = один концепт через манипулятивы и пошаговый scaffolding. Каждая ошибка = немедленная обратная связь. Важно: Happy Numbers НЕ маркирует себя как «AI Tutor» — это адаптивный движок + диалоговая педагогика, не LLM-ассистент. Rule-based, не LLM. Сильна педагогикой, не AI. ESSA Tier III, SOC 2 Type II, COPPA/FERPA. ~2M учеников в США. $14.50/ученик/год. Интеграции с ClassLink и Clever.",
      "strengths": [
        "ESSA Tier III — независимо проверенная доказательная база",
        "Pedagogy-first: математика как связная PK-5 история с манипулятивами",
        "Station rotation модель: продукт намеренно встроен в формат класса, учитель не устраняется",
        "Rule-based (не LLM) — нет галлюцинаций, детерминированный движок"
      ],
      "weaknesses": [
        "Только США, только английский и испанский — нет локализации",
        "Не LLM-собеседник — нет Socratic dialogue с учеником",
        "PreK–5 только — нет охвата средней и старшей школы"
      ],
      "open_questions": [
        "[P1] Есть ли handwriting OCR?",
        "[P1] Возможна ли локализация на азербайджанский или подключение к местной программе?"
      ],
      "screenshots": [
        {
          "file": "screenshots/happy_numbers/Снимок экрана 2026-05-15 144714.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/happy_numbers/Снимок экрана 2026-05-15 144750.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/happy_numbers/Снимок экрана 2026-05-22 153639.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/happy_numbers/Снимок экрана 2026-05-22 153645.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/happy_numbers/Снимок экрана 2026-05-22 153652.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/happy_numbers/Снимок экрана 2026-05-22 153752.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/happy_numbers/Снимок экрана 2026-05-22 154056.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/happy_numbers/Снимок экрана 2026-05-22 154208.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/happy_numbers/Снимок экрана 2026-05-22 154217.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/happy_numbers/Снимок экрана 2026-05-22 154225.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/happy_numbers/Снимок экрана 2026-05-22 154307.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/happy_numbers/Снимок экрана 2026-05-22 154329.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        }
      ],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "Quantile-based вступительный тест → стартовая точка в PreK-5 программе."
        },
        "student_home": {
          "status": "yes",
          "notes": "Программа «один концепт за сессию». Урок назначен учителем, движение по графу."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Сессия = один концепт через визуальные манипулятивы. Click/tap-механики, минимум текста для младших."
        },
        "ai_hint_on_demand": {
          "status": "no",
          "notes": "нет (rule-based) — ребёнок не запрашивает помощь у LLM. Pre-defined hints и манипулятивы по сценарию."
        },
        "ai_proactive": {
          "status": "no",
          "notes": "нет — детерминированный движок без proactive вмешательств. Помощь по сценарию урока."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Rule-based remediation по сценарию. Ошибся → определённая подсказка/визуальная модель → ещё попытка."
        },
        "ai_reflection": {
          "status": "no",
          "notes": "нет — детерминированная программа без reflection prompts."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Прогресс по программе K-5 видимый ребёнку и учителю."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Класс-дашборд: actionable insights, рекомендации по группировке."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "Real-time прогресс класса. Учитель ведёт малую группу пока остальные работают."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Индивидуальный профиль с прогрессом по PK-5 программе."
        },
        "misconception_map": {
          "status": "no",
          "notes": "нет специфической карты misconceptions."
        },
        "ai_content_gen": {
          "status": "no",
          "notes": "нет AI-content-generation — программа фиксированная."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "Дашборд с actionable insights + рекомендации по группировке учеников."
        },
        "group_adaptation": {
          "status": "no",
          "notes": "Нет в продукте; рекомендуется station rotation, дети работают индивидуально"
        },
        "parent_report": {
          "status": "no",
          "notes": "нет специфической функции (school product) — родитель видит через школу."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "imagine_im",
      "name": "Imagine IM",
      "segment": "B2G школы и округа",
      "age_range": "PreK–12 (4–18 лет)",
      "geography": "США (~50% округов)",
      "evidence": "ESSA Tier 2 · Missouri 16 школ · AI-фичи отдельно НЕ изучены",
      "ai_moat": "Curriculum-Informed AI™ + Eedi diagnostic engine · curriculum lock-in",
      "url": "https://imaginelearning.com/products/math/imagine-im",
      "summary_short": "Certified Illustrative Mathematics PreK-12 + ClassMate AI + Eedi assessments (с янв 2026).",
      "summary_long": "Крупнейший edtech-вендор для школ США (Stride/K12 Inc., NYSE). Семейство: Imagine IM (флагман, сертифицированная Illustrative Mathematics PreK-12), Imagine Math (полный пул математики), Imagine Math Facts (беглый счёт). Edgenuity (включая TTA/EDI) продаётся как отдельно, так и в качестве части общего пакета Imagine. С января 2026: Eedi-движок встроен в Imagine IM как AI Assessments. Back-to-school 2026: ClassMate AI (Curriculum-Informed AI, знает контекст конкретного урока, не общий чат). ~18M студентов. ~50% округов США. Формирующийся стандарт «AI-enhanced учебника» в США — AI встроен внутрь программы, а не рядом с ней.",
      "strengths": [
        "Полный K-12 curriculum на базе Illustrative Mathematics — curriculum lock-in",
        "Eedi-движок + ClassMate AI 2026 — прямой конкурент по позиционированию",
        "Масштаб: ~18M студентов, ~50% округов США",
        "ESSA Tier 2 evidence (для программы; AI-фичи отдельно не изучены)"
      ],
      "weaknesses": [
        "AI-фичи (ClassMate, Eedi) — пока только маркетинговые материалы, реализация back-to-school 2026",
        "Pricing полностью закрыт",
        "Огромная компания — инерция, сложная кастомизация под локальные рынки"
      ],
      "open_questions": [
        "[P0] Лицензия per-student — конкретные цифры?",
        "[P0] Live Teachers (Imagine Math) — как часто доступны, модель оплаты?",
        "[на ресёрч] Что именно делает ClassMate, как совмещён с Eedi-движком?",
        "[на ресёрч] Изучить реальные интерфейсы Imagine Math",
        "[на ресёрч] Что из себя представляет classroom-блок — нет понимания",
        "[на ресёрч] Сколько длится диагностика?"
      ],
      "screenshots": [
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-15 145921.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 154950.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155014.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155025.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155031.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155041.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155054.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155131.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155142.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155407.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155715.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155747.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155820.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155910.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155938.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 155955.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 160017.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 160057.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 160211.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 160402.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 160509.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/imagine_im/Снимок экрана 2026-05-22 160636.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        }
      ],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "Lesson начинается с Warm-up (5-10 мин instructional routine). Диагностика через Eedi AI Assessments (10 вопросов)."
        },
        "student_home": {
          "status": "yes",
          "notes": "Digital lesson UI: warm-up, launch, work, cool-down. Cards/grids назначенных уроков."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "5 шагов IM-структуры: Warm-up → Launch → Independent work → Small-group + synthesis → Cool-down. Print + Digital."
        },
        "ai_hint_on_demand": {
          "status": "yes",
          "notes": "ClassMate AI — Curriculum-Informed AI знает контекст урока. Help on demand для ученика и учителя."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "ClassMate AI + Eedi заметки учителю в реалтайме. Misconceptions surface as student работает."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Через Eedi engine: misconception coding в дистракторах → real-time misconception map. Учитель видит на дашборде."
        },
        "ai_reflection": {
          "status": "no",
          "notes": "нет специфической рефлексии. ClassMate AI помогает учителю выявить thinking."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Lesson completion + cool-down formative assessment. Visible в digital UI."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Teacher dashboard в Imagine IM с lesson facilitation tools + real-time student thinking visibility."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "Real-time misconception map по классу через Eedi engine. Учитель видит как формируется misconception."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Student profile с misconceptions history через Eedi + работа на уроках."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "Real-time misconception map через Eedi diagnostic engine."
        },
        "ai_content_gen": {
          "status": "yes",
          "notes": "ClassMate AI: generate practice, build lesson plans, draft communications. Внутри curriculum."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "Pacing рекомендации, grouping suggestions, support — кому что дать. Re-teach — фронтальное объяснение конкретного misconception."
        },
        "group_adaptation": {
          "status": "yes",
          "notes": "ДА — встроенные small-group activities в core curriculum (collaborative problem-solving)"
        },
        "parent_report": {
          "status": "yes",
          "notes": "Parent updates через школу. Не свободный AI-генерированный."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "eedi",
      "name": "Eedi",
      "segment": "B2G школы (часть Imagine с 2026)",
      "age_range": "9–16 лет (UK Y5–Y11)",
      "geography": "UK → США (через Imagine)",
      "evidence": "gold-standard · RCT n=2,901 (WhatWorked) · DeepMind RCT n=165 · Hedge's g 0.17",
      "ai_moat": "ML с Microsoft Research Cambridge + DeepMind LearnLM · misconception corpus 1B взаимодействий",
      "url": "https://eedi.com",
      "summary_short": "Diagnostic engine через misconception coding в multiple-choice вопросах. Slip vs Misconception.",
      "summary_long": "Британский EdTech. Killer feature: каждый дистрактор в вопросе = конкретное misconception. Не «неверный ответ», а «ребёнок думает что (-x)² = -x²». Slip vs Misconception. Confidence Level 1–5 после каждого вопроса: правильно + низкая уверенность = удача, тему надо закрепить. Библиотека ~28 000 diagnostic questions. NeurIPS 2020 Education Challenge (17M ответов, 125K учеников). RCT: n=2 901 (WhatWorked), DeepMind RCT n=165 (Hedge's g 0.17). С января 2026 — AI Assessments встроены в Imagine IM. ML с Microsoft Research Cambridge + DeepMind LearnLM. Misconception corpus: 1B взаимодействий.",
      "strengths": [
        "Gold-standard RCT — peer-reviewed, DeepMind partnership",
        "Misconception-coded диагностика — самый точный отчёт учителю в индустрии",
        "Confidence Level: сигнал о качестве понимания, а не только о правильности",
        "Corpus 1B взаимодействий — moat данных"
      ],
      "weaknesses": [
        "После интеграции в Imagine — неясно, продаётся ли Eedi отдельно",
        "Только multiple-choice формат — нет step-by-step input или рукописи",
        "Фокус диагностика, нет полного curriculum"
      ],
      "open_questions": [
        "[P0] Eedi теперь часть пакета Imagine или продаётся отдельно?",
        "[P0] Сколько diagnostic questions за сессию, как активируется AI-чат?",
        "[P1] Где сейчас основная инсталляция — UK или USA?",
        "[P1] «Миллиарды ответов в датасете» — конкретный размер открытого датасета NeurIPS 2020?"
      ],
      "screenshots": [
        {
          "file": "screenshots/eedi/Снимок экрана 2026-05-15 150318.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/eedi/Снимок экрана 2026-05-15 150418.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/eedi/Снимок экрана 2026-05-15 150456.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        }
      ],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "Учитель назначает diagnostic quiz из библиотеки ~28k вопросов. Quiz = стартовая точка."
        },
        "student_home": {
          "status": "yes",
          "notes": "Лента назначенных diagnostic quiz от учителя. Нет полноценного home — фокус на заданиях."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Multiple-choice 4 варианта (A/B/C/D) с misconception-coded дистракторами. Confidence emoji 1-5 опционально."
        },
        "ai_hint_on_demand": {
          "status": "no",
          "notes": "нет — нет отдельного hint API. Помощь приходит после неверного ответа."
        },
        "ai_proactive": {
          "status": "no",
          "notes": "нет — нет proactive вмешательств. Reactive после неверного ответа."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Killer feature. Каждый дистрактор = конкретное misconception. Sequence: Выбор → Идентификация → Вмешательство (визуальная модель) → Проверка аналогичным вопросом."
        },
        "ai_reflection": {
          "status": "yes",
          "notes": "Writing to Learn: «Объясни почему ты выбрал этот вариант?» — активация метакогнитивных процессов. Confidence Level 1-5 после каждого вопроса (опц.)."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Confidence Level + Fluency & Flexibility metric. Карта misconceptions учителю."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Главная учителя с библиотекой ~28k diagnostic questions и assigned quizzes по классам."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "Карта misconceptions класса в реалтайме после quiz."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Профиль ученика с историей misconceptions + Confidence + Fluency."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "Killer feature. «60% класса считают что (-x)² = -x²». Каждый дистрактор закодирован как misconception."
        },
        "ai_content_gen": {
          "status": "no",
          "notes": "нет — Eedi работает с готовыми diagnostic questions из библиотеки."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "Confidence Level + Fluency & Flexibility — учителю как сигнал «закрепить тему»."
        },
        "group_adaptation": {
          "status": "no",
          "notes": "Нет (индивидуальный диагноз)"
        },
        "parent_report": {
          "status": "no",
          "notes": "нет специфической функции parent reports."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "amplify_desmos_math",
      "name": "Amplify Desmos Math",
      "segment": "B2G школы и округа",
      "age_range": "Grade 6 – Algebra 1 (~11–15 лет)",
      "geography": "США",
      "evidence": "mCLASS Math benchmarking · ESSA evidence",
      "ai_moat": "Responsive Feedback (item-level adaptivity) · mCLASS benchmarking",
      "url": "https://amplify.com/programs/amplify-desmos-math",
      "summary_short": "K-A1 problem-based curriculum с Responsive Feedback item-level adaptivity + mCLASS benchmarking.",
      "summary_long": "K–Algebra 1 problem-based curriculum от Amplify (партнёрство с Desmos). Responsive Feedback: item-level adaptivity в реальном времени — подстраивается к работе ученика. mCLASS Math benchmarking and progress-monitoring (asset-based). Targeted, actionable insights linked to core instruction and intervention resources. ESSA evidence. Фокус: США, grade 6 – Algebra 1 (~11–15 лет).",
      "strengths": [
        "Responsive Feedback — item-level adaptivity внутри урока",
        "mCLASS Math benchmarking — связка с прогресс-мониторингом",
        "ESSA evidence"
      ],
      "weaknesses": [
        "Узкий охват: Grade 6 – Algebra 1, нет полного K-12",
        "Нет публичных данных о глубине AI-функциональности",
        "Только США"
      ],
      "open_questions": [],
      "screenshots": [],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "mCLASS Math benchmarking and progress-monitoring assessment. Asset-based assessment system."
        },
        "student_home": {
          "status": "yes",
          "notes": "Digital lesson UI с интерактивными activities. Teacher dashboard управляет тем что показано."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Problem-based interactive activities. Responsive Feedback adjusts to student work in real-time."
        },
        "ai_hint_on_demand": {
          "status": "unknown",
          "notes": "нет информации по chat-like hint. Responsive Feedback срабатывает item-level adaptively."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "Responsive Feedback срабатывает на student work (item-level). Не свободно proactive."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Responsive Feedback adjusts к работе ученика item-level. Teacher dashboard показывает clear student actions."
        },
        "ai_reflection": {
          "status": "unknown",
          "notes": "нет информации."
        },
        "student_progress": {
          "status": "yes",
          "notes": "mCLASS Math benchmarking результаты. Progress-monitoring views."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Teacher Dashboard с real-time visuals. Data reports по student thinking."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "Teacher dashboard с real-time visibility into student thinking."
        },
        "student_profile": {
          "status": "yes",
          "notes": "mCLASS Math reports per student. Asset-based insights."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "mCLASS Math benchmarking links to misconceptions."
        },
        "ai_content_gen": {
          "status": "yes",
          "notes": "Targeted, actionable insights linked to core instruction and intervention resources."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "Targeted actionable insights. Whole-class instruction + targeted intervention recommendations."
        },
        "group_adaptation": {
          "status": "partial",
          "notes": "Частично — Think-Pair-Share, anonymous response display, PBL; группы офлайн"
        },
        "parent_report": {
          "status": "no",
          "notes": "нет специфической функции (school product)."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "edlight",
      "name": "EdLight",
      "segment": "B2G школы (фокус Special Ed)",
      "age_range": "K-12 (фокус на elementary + Special Ed)",
      "geography": "США",
      "evidence": "case studies · нет публичных RCT",
      "ai_moat": "AI для handwriting analysis student work · proprietary",
      "url": "https://edlight.com",
      "summary_short": "AI co-teacher анализирует фотографии handwritten student work + рекомендации учителю.",
      "summary_long": "AI co-teacher анализирует фотографии рукописных работ учеников и делает рекомендации учителю. Ключевая особенность: ученик не взаимодействует с AI напрямую — продукт ориентирован исключительно на учителя. Ученик пишет на бумаге → фотографирует → отправляет учителю. EdLight интерпретирует handwriting, идентифицирует misconceptions и gaps, рекомендует next steps. Фокус: Special Education (IEP). GoalLight — связь с IEP-процессом. School/district-level analysis для Special Ed leaders.",
      "strengths": [
        "AI анализирует рукописные работы — нет требования к цифровому вводу от ученика",
        "IEP-интеграция (GoalLight) — специализация на Special Education"
      ],
      "weaknesses": [
        "Ученик не взаимодействует с AI напрямую — нет тьюторинга",
        "Special Ed фокус ограничивает применимость в mainstream классах",
        "Нет публичных RCT"
      ],
      "open_questions": [],
      "screenshots": [
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 185450.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 185504.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 185516.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 185526.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 185538.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 185553.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 185607.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 185616.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 185624.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 185635.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 185643.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 190029.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 194203.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/edlight/Снимок экрана 2026-05-25 194734.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        }
      ],
      "features": {
        "student_onboarding": {
          "status": "no",
          "notes": "Нет welcome экрана для ученика — продукт ориентирован на учителя. Ученик сдаёт фото работы."
        },
        "student_home": {
          "status": "no",
          "notes": "нет — ученик не входит в продукт. Учитель загружает фото работы, ученик получает feedback через учителя."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Ученик пишет работу на бумаге → фотографирует → отправляет учителю. EdLight интерпретирует handwriting."
        },
        "ai_hint_on_demand": {
          "status": "no",
          "notes": "нет — AI работает с учителем, не с учеником напрямую."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "AI автоматически анализирует загруженную работу — proactive для учителя, не для ученика."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "AI идентифицирует student needs и misconceptions из handwritten work. Suggests next steps учителю."
        },
        "ai_reflection": {
          "status": "no",
          "notes": "нет — AI не работает с учеником напрямую для reflection."
        },
        "student_progress": {
          "status": "no",
          "notes": "нет — ученик не видит прогресс. Только учитель + IEP-родители (через GoalLight)."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "EdLight teacher dashboard: список загруженных работ + AI-анализ."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "Учитель видит student groupings based on mastery level: кто on track, кому нужна поддержка."
        },
        "student_profile": {
          "status": "yes",
          "notes": "EdLight individual student gaps + recommended next steps. GoalLight связь с IEP."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "AI идентифицирует student needs и misconceptions, suggests next steps для instruction."
        },
        "ai_content_gen": {
          "status": "yes",
          "notes": "AI suggests next steps for instruction учителю based on student work."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "Recommended next steps for instruction. School/district-level analysis для Special Ed leaders."
        },
        "group_adaptation": {
          "status": "no",
          "notes": "Нет (асинхронный teacher-tool)"
        },
        "parent_report": {
          "status": "yes",
          "notes": "Personalized feedback aligned to learner's plan — Teachers, students, families получают."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "evidenceb_adaptiv_math",
      "name": "EvidenceB / Adaptiv'Math",
      "segment": "B2G школы (Франция + NYC пилот)",
      "age_range": "Начальная школа CP–CM2 (6–11 лет)",
      "geography": "Франция (3,500+ школ) · NYC пилот",
      "evidence": "EvidenceB pilot studies · 10,000+ students 2023 · 70-80% success rate",
      "ai_moat": "AI personalization engine на cognitive science · 8,000+ exercises",
      "url": "https://evidenceb.fr",
      "summary_short": "French AI-математика для начальной школы. 8,000+ упражнений в 5 модулях. ИИ + cognitive science.",
      "summary_long": "Французский AI для начальной школы (CP–CM2, 6–11 лет). 8 000+ упражнений в 5 модулях: числа, расчёт, problem solving, фракции, пропорции. AI personalization engine на основе когнитивной науки. Self-correcting упражнения на планшетах. 3 500+ школ во Франции, NYC пилот. EvidenceB pilot studies (10 000+ учеников 2023, 70–80% success rate). NYC пилот — выход на американский рынок.",
      "strengths": [
        "Cognitive science-based AI personalization — научная база",
        "Pilot studies 10K+ учеников — значимая выборка",
        "Планшетный UX — близко к нашей модели"
      ],
      "weaknesses": [
        "Только французский рынок + NYC пилот — нет глобального масштаба",
        "Только начальная школа (6–11 лет)",
        "Нет независимых RCT"
      ],
      "open_questions": [],
      "screenshots": [],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "Diagnostic test → AI proposes exercise pathways. Несколько раз в неделю на планшетах."
        },
        "student_home": {
          "status": "yes",
          "notes": "Tablet UI с интерактивными упражнениями по 5 модулям. AI-проложенный pathway."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Интерактивные упражнения с self-correction (8,000+). 5 модулей: числа, расчёт, problem solving, фракции, пропорции."
        },
        "ai_hint_on_demand": {
          "status": "no",
          "notes": "нет — упражнения self-correcting, чат-помощник не упоминается в материалах."
        },
        "ai_proactive": {
          "status": "unknown",
          "notes": "нет информации о proactive triggers. Adaptive pathway пересчитывается по ходу."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Self-correcting упражнения. AI пересматривает pathway если ошибка."
        },
        "ai_reflection": {
          "status": "unknown",
          "notes": "нет информации о explain-back функции."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Self-correcting exercises + progress visible to teacher. Ученик видит свой темп."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Учительский интерфейс с группами/классами. Pathway-аналитика."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "Live progress по группе на дашборде учителя."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Профиль с пройденными модулями и pathway."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "5 modules-specific feedback на ошибки."
        },
        "ai_content_gen": {
          "status": "no",
          "notes": "нет — упражнения фиксированные в банке 8,000+."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "AI личность для каждого ребёнка по результатам diagnostic + ongoing."
        },
        "group_adaptation": {
          "status": "yes",
          "notes": "Нет; teacher dashboard предлагает группы по similar needs для офлайн-работы"
        },
        "parent_report": {
          "status": "yes",
          "notes": "Reports родителю через школу."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "thinkverse_learnie_ai",
      "name": "Thinkverse (Learnie AI)",
      "segment": "B2G школы + free для учителей",
      "age_range": "K-12",
      "geography": "США (Harvard accelerator)",
      "evidence": "pilots в школах · нет публичных RCT",
      "ai_moat": "AI tutors с adaptive learning paths · speech recognition · не раскрыт стек публично",
      "url": "https://thinkverse.co",
      "summary_short": "K-12 AI math tutor (бывш. Learnie AI). Harvard accelerator winner 2025. Бесплатно для учителей.",
      "summary_long": "K-12 AI math tutor (бывш. Learnie AI). Harvard accelerator winner 2025. AI tutors assess students' understanding на старте. Adaptive learning paths после первой оценки. Speech recognition + text-only mode для slower readers. IEP Design Tool для individualized education plans. Achievement tracking. Бесплатен для учителей. Ранняя стадия — нет публичных RCT.",
      "strengths": [
        "Бесплатен для учителей",
        "Speech recognition — accessibility фича",
        "Harvard accelerator — валидация ранней тракции"
      ],
      "weaknesses": [
        "Ранняя стадия, нет публичных RCT",
        "Нет публичных данных о AI стеке"
      ],
      "open_questions": [],
      "screenshots": [
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 183734.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 183743.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 183756.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 183832.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 183905.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 183927.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 184005.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 184054.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 184206.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 184308.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 184445.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 184513.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 184523.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 184532.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 184542.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 184551.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/thinkverse_learnie_ai/Снимок экрана 2026-05-25 185011.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        }
      ],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "AI tutors assess students' understanding на старте. Adaptive learning paths после первой оценки."
        },
        "student_home": {
          "status": "yes",
          "notes": "Personalized learning paths visible to student. Speech recognition + text-only mode."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Interactive AI tutor session. Real-time questions. Speech recognition доступно. Text-only mode для slower readers."
        },
        "ai_hint_on_demand": {
          "status": "yes",
          "notes": "AI tutor отвечает на real-time questions ученика. Identifies misconceptions, provides targeted instructions."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "AI tutor adaptive learning paths. Identifies misconceptions automatically."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Identifies misconceptions, provides targeted instructions."
        },
        "ai_reflection": {
          "status": "yes",
          "notes": "AI tutor отслеживает achievements. Identifies misconceptions."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Track achievements. Personalized learning paths visible."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Teacher dashboard. Free для всех учителей."
        },
        "live_class_monitoring": {
          "status": "unknown",
          "notes": "нет информации о в-классе live alerts."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Personalized learning path per student + achievements tracking."
        },
        "misconception_map": {
          "status": "unknown",
          "notes": "нет публичной информации о aggregated misconception view."
        },
        "ai_content_gen": {
          "status": "yes",
          "notes": "IEP Design Tool для individualized education plans. Adaptive content design."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "Achievement tracking + adaptive paths рекомендуются automatically."
        },
        "group_adaptation": {
          "status": "yes",
          "notes": "Нет; 1:1 AI tutor + class dashboard, групповой работы нет"
        },
        "parent_report": {
          "status": "unknown",
          "notes": "нет публичной информации о parent reports."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "aleks",
      "name": "ALEKS",
      "segment": "B2B школы/округа US + B2C homeschool/family",
      "age_range": "Grades 3–12 (math); ALEKS Adventure K-3 (новый)",
      "geography": "США все 50 штатов · Higher Ed глобально · Spanish UI",
      "evidence": "+9% освоения, –20% время assessment (MH 2023); ESSA tier не заявлен",
      "ai_moat": "Knowledge Space Theory (KST) — направленный граф навыков + deep learning поверх (2023)",
      "url": "https://aleks.com",
      "summary_short": "Адаптивная K-12 + Higher Ed по математике/химии; индивидуальная карта знаний и задачи на границе ZPD.",
      "summary_long": "Knowledge Space Theory (Doignon & Falmagne, 1985): домен знаний = набор концептов с предусловиями. Algebra 1 = ~350 базовых концептов → миллионы возможных состояний знания. Диагностика: 25–30 вопросов, каждый следующий с вероятностью правильного ответа близкой к 0.5 (максимальная информационная отдача). Визуализация: Pie chart — тёмный (mastered) / светлый (learned) / белый (remaining). Фокус: средняя и старшая школа, алгебра и выше. McGraw-Hill.",
      "strengths": [
        "Knowledge Space Theory — математически строгая теория",
        "Pie chart — понятная визуализация прогресса для учителя и ученика"
      ],
      "weaknesses": [
        "Фокус на старшей школе, слабее для начальной",
        "Граф знаний ~1 000 узлов vs 10 000+ у Squirrel"
      ],
      "open_questions": [
        "[правка] Найти скриншоты системы в открытом доступе",
        "[на ресёрч] Реальный охват — K-12 или фокус на средней/старшей школе?",
        "[на ресёрч] Как выглядит адаптация выше уровня Algebra 1?",
        "[на ресёрч] Актуальный B2G pricing и модель покупки для школ"
      ],
      "screenshots": [
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-25 192343.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-25 192407.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-25 192454.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 150420.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 150446.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 150500.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 150510.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 150652.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151017.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151044.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151102.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151123.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151226.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151238.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151312.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151333.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151348.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151358.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151404.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151433.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151509.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151528.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151554.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151652.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151659.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151814.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151823.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151840.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151853.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151935.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 151946.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 152011.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 152019.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 152049.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 152100.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 152140.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 152304.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 152311.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 152334.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/aleks/Снимок экрана 2026-05-26 152350.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        }
      ],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "Initial Assessment — адаптивный тест 20–25 вопросов, ~30 мин → точное knowledge state."
        },
        "student_home": {
          "status": "yes",
          "notes": "ALEKS Pie — круговая диаграмма по темам курса; ученик сам выбирает доступные сегменты."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Задачи problem-based, без видео; ввод — клавиатура, math-редактор, выбор вариантов."
        },
        "ai_hint_on_demand": {
          "status": "yes",
          "notes": "Кнопка Explain — пошаговое объяснение, rule-based template (не LLM); по запросу ученика."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "Periodic Knowledge Checks (~каждые 20 тем) — авто-рекассеcмент; реактивные алерты в lesson — нет данных."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Сообщение об ошибке + возможность Explanation и повтор; рекомендация вернуться на пререквизит при системных провалах."
        },
        "ai_reflection": {
          "status": "no",
          "notes": "Нет данных; ALEKS не позиционирует метакогнитивные подсказки."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Pie Chart (главный визуал) + Progress Report по времени; доля освоенных топиков по сегменту."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Class Pie Report, Progress, Time and Topic Report; ALEKS Insights — at-risk модуль."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "ALEKS Insights алерты по at-risk ученикам, но live-режим в момент урока — нет данных."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Подробный pie по ученику, time-on-task, освоенные/провальные топики, история assessment."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "Отдельной misconception-карты нет; прокси — отчёт по часто-ошибочным топикам."
        },
        "ai_content_gen": {
          "status": "yes",
          "notes": "Quizzes/assignments по темам из библиотеки, авто-разбивка по уровням; AI-генерации контента нет."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "ALEKS Insights рекомендует кого подтянуть, кому пора Knowledge Check."
        },
        "group_adaptation": {
          "status": "no",
          "notes": "Нет в продукте; «instructional groups» только как teacher-side рекомендация"
        },
        "parent_report": {
          "status": "yes",
          "notes": "Master Account для homeschool: автоотчёты по email (weekly/monthly), PDF-экспорт."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "ixl",
      "name": "IXL",
      "segment": "B2B 95/100 топ-округов US + B2C family ($9.95–19.95/мес)",
      "age_range": "PreK – Calculus (PreK-12) — один из самых широких диапазонов",
      "geography": "18+ млн учеников · US/UK/CA/AU + 120+ языков · команды в 7 странах",
      "evidence": "ESSA Tier 1 'Strong' (RCT Johns Hopkins, 2024)",
      "ai_moat": "SmartScore (адаптивный 0-100) + Real-Time Diagnostic + skill-граф на тысячи навыков; не LLM",
      "url": "https://ixl.com",
      "summary_short": "Адаптивная PreK-12 по математике/ELA/science; тысячи атомарных skills, каждый со SmartScore.",
      "summary_long": "Масштабная K-12 practice-платформа. SmartScore: запатентованная метрика прогресса. Adaptive difficulty. Доступна и школам (B2G) и индивидуально (B2C). Нет данных о глубине AI-тьюторинга — фокус на practice + immediate feedback.",
      "strengths": [
        "Широкий охват K-12",
        "SmartScore — понятная метрика для родителей и учителей"
      ],
      "weaknesses": [
        "Нет данных о AI глубине — скорее drill & practice",
        "Нет публичных RCT"
      ],
      "open_questions": [
        "[на ресёрч] Что в US-сегменте — домашняя работа или школьная лицензия? Разница интерфейса?"
      ],
      "screenshots": [
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 195756.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 195803.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 195901.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 195932.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 195956.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 200029.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 200051.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 200330.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 200617.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 200652.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 200700.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 200731.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 200738.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 200747.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 200907.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 200926.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 200952.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/ixl/Снимок экрана 2026-05-25 201032.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        }
      ],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "Real-Time Diagnostic ~45 мин — адаптивный по strands; выдаёт action plan по навыкам."
        },
        "student_home": {
          "status": "yes",
          "notes": "Dashboard с рекомендованными skills + Diagnostic levels по strands; можно выбрать тему из библиотеки."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Skill-by-skill практика; ввод — числа, формулы, drag-drop, выбор; 4,500+ видео 'Learn with example'."
        },
        "ai_hint_on_demand": {
          "status": "yes",
          "notes": "'Learn with an example' + видеотуториалы по запросу; rule-based / гибрид, не LLM."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "Action plan обновляется автоматически на основе ~10-15 еженедельных диагност. вопросов."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Мгновенно правильный ответ + question-specific объяснение; SmartScore штрафует сильнее при ошибке."
        },
        "ai_reflection": {
          "status": "no",
          "notes": "Нет данных по специальным рефлексивным/метакогнитивным prompts."
        },
        "student_progress": {
          "status": "yes",
          "notes": "SmartScore per skill (цель обычно 80 или 100); карты прогресса; awards/badges; weekly/monthly growth."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "IXL Analytics: Trouble Spots, Real-Time Performance, Usage, Skill Growth, Diagnostic levels по классу."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "Real-Time Center — кто что сейчас делает, какие skills, какие ошибки; live alerts не явно задокументированы."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Каждый skill, история ответов, time, current SmartScore, diagnostic levels по strands."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "Trouble Spots — отдельный отчёт: где класс/ученик систематически спотыкается."
        },
        "ai_content_gen": {
          "status": "yes",
          "notes": "Spark Studio (2024) — AI-инструменты для учителей: генерация материалов, дифференциация; Lightning Jams."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "Personalized skill recommendations; Trouble Spots по классу; advice кого подтянуть."
        },
        "group_adaptation": {
          "status": "partial",
          "notes": "Частично — Group Jam (whole-class) и Lightning Jam (competitive); shared canvas нет"
        },
        "parent_report": {
          "status": "yes",
          "notes": "Family Reports: Usage, Trouble Spots, Score Chart, Questions Log, Progress, Student Summary."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "dreambox",
      "name": "DreamBox",
      "segment": "B2B школы/округа + B2C family ($30/уч/год)",
      "age_range": "K–8 (математика)",
      "geography": "США (50 штатов) + Canada + Mexico; UK через Daisy Education; Discovery — 100 стран",
      "evidence": "ESSA Tier I, II, III, IV — все 4 уровня (редкость); STRONG by Evidence for ESSA; Harvard report",
      "ai_moat": "Intelligent Adaptive Learning™ (IAL) — патент: анализирует КАК решает (стратегию), 50,000+ траекторий",
      "url": "https://dreambox.com",
      "summary_short": "K-8 supplemental math с виртуальными манипулятивами (TenFrame, MathRack); IAL меняет контент, scaffolding, темп в реальном времени.",
      "summary_long": "Continuous Adaptive Learning: каждое действие ученика — клик, нажатие клавиши, время на задаче, паттерн ошибок — попадает в realtime-движок. Адаптация ВНУТРИ урока, не только между уроками. Граф знаний существует, но не публикуется явно (в отличие от ALEKS и Squirrel) — упор на «рекомендательную» модель, скрытую от ученика и учителя. Discovery Education (бывш. K12 Inc.).",
      "strengths": [
        "Continuous adaptation внутри урока — самая тонкая адаптация из всех"
      ],
      "weaknesses": [
        "Граф знаний скрыт — нет transparency для учителя",
        "После покупки Discovery Education — неясны изменения продукта"
      ],
      "open_questions": [
        "[на ресёрч] После покупки Discovery Education — что изменилось в pricing и доступности?",
        "[на ресёрч] Размер knowledge graph публикуется где-то?"
      ],
      "screenshots": [
        {
          "file": "screenshots/dreambox/Снимок экрана 2026-05-25 193613.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        },
        {
          "file": "screenshots/dreambox/Снимок экрана 2026-05-25 193624.png",
          "caption": "[TODO] Подпиши этот скриншот",
          "tags": []
        }
      ],
      "features": {
        "student_onboarding": {
          "status": "no",
          "notes": "Нет жёсткого initial diagnostic; IAL начинает с ожидаемого уровня и быстро адаптируется по первым взаимодействиям."
        },
        "student_home": {
          "status": "yes",
          "notes": "Игроподобный hub с avatars/мирами (K-2 — отдельный игровой мир, 3-8 — более 'взрослый'); рекомендации + выбор."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Манипулятивы как первоисточник: TenFrame, MathRack, number line, area model. Ученик ВЗАИМОДЕЙСТВУЕТ с моделью (drag/click/build)."
        },
        "ai_hint_on_demand": {
          "status": "yes",
          "notes": "Кнопка Hint — ограниченное число новых hint'ов на задачу, остальные повторы; rule-based + adaptive, не LLM."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "IAL динамически меняет scaffolding/pacing/число хинтов на основе подхода ученика (не только верно/неверно)."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Определяет misconception, даёт 'intelligent feedback' для рефлексии; может откатить на пререквизит lesson."
        },
        "ai_reflection": {
          "status": "yes",
          "notes": "'Intelligent feedback to prompt reflection and rethinking' — встроенные prompts на переосмысление через манипулятивы."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Badges, coins (за perseverance, не только за правильность); прогресс по standards; lesson completion; сильная геймификация."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Insight Dashboard: assignments, recommendations, at-risk students, mastery по standards."
        },
        "live_class_monitoring": {
          "status": "no",
          "notes": "Нет выраженного live-режима в духе MATHia LiveLab; real-time отчёты есть, live alerts во время урока — нет данных."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Lessons completed, время, проблемные навыки, рекомендации, mastery по standards; стратегические данные о подходах."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "Явной отдельной 'misconception map' нет; IAL внутренне моделирует misconceptions; учителю — 'trouble areas' + interventions."
        },
        "ai_content_gen": {
          "status": "yes",
          "notes": "Lesson recommendations: назначить targeted lessons классу/группе/ученику; AI-генерации контента нет данных."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "Insight Dashboard рекомендует кому small-group, кто at-risk, кому ускориться."
        },
        "group_adaptation": {
          "status": "no",
          "notes": "Нет в продукте; рекомендуется station rotation"
        },
        "parent_report": {
          "status": "yes",
          "notes": "Family Dashboard (отдельный): Overview, Activity, Standards, Usage, Assignments; цель 5 уроков/неделю."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "mathia",
      "name": "MATHia",
      "segment": "B2B школы/округа (district sales); caregiver-доступ при школьной подписке",
      "age_range": "Grades 6–12 (middle + high); Integrated Math I/II/III, Algebra I/II, Geometry",
      "geography": "США (основной); корни — Carnegie Mellon University; международно ограничено",
      "evidence": "ESSA Tier 1 'Strong Evidence' (Carnegie HSMS Algebra I); RAND RCT 2014 significant effect",
      "ai_moat": "Knowledge Tracing + Model Tracing (двойная модель); Unproductive Struggle Detection; LiveHint AI на LLM (2023+) — 25 лет данных",
      "url": "https://carnegielearning.com/solutions/math/mathia",
      "summary_short": "ITS grades 6-12 с пошаговым решением; модель знаний + генеративный AI-тьютор LiveHint, обученный 'думать как ученик'.",
      "summary_long": "Carnegie Learning. Model tracing: проверяет КАЖДЫЙ шаг ученика, а не только финальный ответ. Knowledge tracing: Bayesian-модель для оценки вероятности владения навыком после каждого шага. LiveLab dashboard: учитель видит «спасательный круг» у учеников в unproductive struggle. ML-классификатор: различает productive struggle (ученик учится нормально) и unproductive struggle (нужна интервенция). Клик на иконку → exact remediation рекомендованная моделью. LiveHint AI (2025) — новый Generative AI Math Tutor «trained to think like a student».",
      "strengths": [
        "Model tracing — самый детальный анализ хода решения в индустрии",
        "Productive vs unproductive struggle — ML-классификатор с peer-reviewed исследованием",
        "LiveHint AI 2025 — новый GenAI слой поверх проверенного Cognitive Tutor"
      ],
      "weaknesses": [
        "Только 6–12 классы — нет начальной школы",
        "Сложная система для учителя — высокий onboarding"
      ],
      "open_questions": [
        "[P0] LiveHint AI — что именно делает, как соотносится с базовой MATHia?",
        "[P1] LiveLab dashboard — как устроен «спасательный круг» в реальном UI?"
      ],
      "screenshots": [],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "Workspaces по curriculum; начинается с Step-by-Step Example; mastery определяется внутри workspace, не отдельным диагностом."
        },
        "student_home": {
          "status": "yes",
          "notes": "Landing с Progress Bar по critical math skills, текущие workspaces (mastery & concept builder), assignments от учителя."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Многошаговые задачи в workspace — ученик вводит каждый шаг. MATHstream — интерактивное видео. Ввод: формулы, табличный, выбор."
        },
        "ai_hint_on_demand": {
          "status": "yes",
          "notes": "Multi-level Hints (3 уровня): перефраз → наводящий вопрос → пошаговое решение. + LiveHint AI — диалоговый LLM-помощник."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "Just-in-Time Hints — система автоматически даёт hint при typical misconception (model tracing); Unproductive Struggle Detection."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Just-in-Time Feedback — на неверный шаг сообщение, отражающее misconception; LiveHint AI ведёт диалог по ошибке."
        },
        "ai_reflection": {
          "status": "yes",
          "notes": "LiveHint AI задаёт встречные вопросы, ведёт сократический диалог; MATHstream avatars 'nudge with questions, hints, rewards'."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Progress Bar по critical math skills; mastery indicators по workspaces; real-time feedback 'что освоено'."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "LiveLab dashboard: live-режим работы класса с динамическими индикаторами на каждого ученика; 'Best Use of AI' EdTech Breakthrough 2019."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "LiveLab — флагман: real-time alerts кто работает / кто idle / кто в unproductive struggle / кому нужно вмешательство."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Подробная: текущий workspace, mastery level, hint usage, time-on-task, alerts по struggle."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "Сильная сторона: каталог common misconceptions встроен в model tracing; учитель видит паттерны ошибок."
        },
        "ai_content_gen": {
          "status": "yes",
          "notes": "Интегр. MATHbook (текст) + MATHia (digital) + MATHstream (видео); учитель выбирает workspaces; AI-генерации заданий — нет данных."
        },
        "ai_insights": {
          "status": "yes",
          "notes": "LiveLab — кому помочь сейчас; рекомендации small-group; модель unproductive struggle как предиктор failure."
        },
        "group_adaptation": {
          "status": "partial",
          "notes": "Частично — LiveLab «group by workspace»: алгоритм подсказывает учителю кого посадить рядом"
        },
        "parent_report": {
          "status": "yes",
          "notes": "MATHia for Caregivers — guide по тому как помогать дома; ограниченные отчёты по сравнению с DreamBox/IXL."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "century_tech",
      "name": "Century Tech",
      "segment": "B2B/B2G: школы, колледжи, мультишкольные группы, министерства; платят учреждения",
      "age_range": "Primary, Secondary, FE/колледжи (~5–18+); включая GCSE и functional skills",
      "geography": "UK (база) · 100+ британских международных школ · сильное MENA (GEMS, Nord Anglia, Cognita)",
      "evidence": "UCL: 11 000 учеников, +30% понимания; экономия учителю ~6 ч/нед (собств. данные ⚠)",
      "ai_moat": "Собственный 'non-generative' AI: Knowledge Tracing + граф микро-уроков 'nuggets'; на cognitive neuroscience + learning science",
      "url": "https://century.tech",
      "summary_short": "AI-платформа персонализированного обучения с микро-уроками (nuggets) по математике/англ/науке; рекомендует следующий шаг + аналитика учителю.",
      "summary_long": "Knowledge Tracing: каждое действие (клик, скор, время) записывается в модель. Контент разбит на nuggets — 5–10 мин микро-уроки. Система рекомендует Focus или Stretch по каждому ученику. Early warning: at-risk students подсвечиваются до того, как риск стал критичным. UNESCO упоминание. Configurable под школьные стандарты. UK → глобальная экспансия.",
      "strengths": [
        "Early warning system — проактивное выявление at-risk до провала",
        "Nuggets: микро-формат под attention span школьников"
      ],
      "weaknesses": [
        "Нет публичных RCT",
        "Нет данных о математическом специализировании"
      ],
      "open_questions": [
        "[на ресёрч] Knowledge Tracing — custom реализация или стандартные методы?",
        "[на ресёрч] Nuggets — кто создаёт, методисты или AI?"
      ],
      "screenshots": [],
      "features": {
        "student_onboarding": {
          "status": "yes",
          "notes": "Class code → онбординг 1-2 недели; diagnostic test в начале курса определяет сильные/слабые места."
        },
        "student_home": {
          "status": "yes",
          "notes": "Recommended Path — динамический список нуггетов, подстраивающийся под результаты; назначенные курсы + текущие задания."
        },
        "lesson_input": {
          "status": "yes",
          "notes": "Нуггет = слайды + видео + самопроверяющиеся вопросы; ввод — MCQ/короткий ответ; рукописного ввода нет."
        },
        "ai_hint_on_demand": {
          "status": "yes",
          "notes": "Подсказок-чата нет; ученик получает объяснение через слайды/видео нуггета; rule-based подсказки в вопросах."
        },
        "ai_proactive": {
          "status": "yes",
          "notes": "Система не 'чатит'; вмешательство = автоматическая пересборка Recommended Path при ошибках/пробелах."
        },
        "ai_on_error": {
          "status": "yes",
          "notes": "Идентифицирует misconception, направляет на пререквизит-нуггет, меняет последовательность пути."
        },
        "ai_reflection": {
          "status": "no",
          "notes": "Нет данных; рефлексивные/метакогнитивные диалоги явно не заявлены — фокус на действиях, не на разговоре."
        },
        "student_progress": {
          "status": "yes",
          "notes": "Recommended Path + история нуггетов с оценками; mastery-индикаторы по темам."
        },
        "teacher_home": {
          "status": "yes",
          "notes": "Teacher Dashboard: Overview (среднее, время), Assignments, Courses, Markbook, Nuggets."
        },
        "live_class_monitoring": {
          "status": "yes",
          "notes": "Реал-тайм данные о выполнении в текущем уроке доступны; отдельного live-режима с алертами — нет данных."
        },
        "student_profile": {
          "status": "yes",
          "notes": "Оценка по нуггетам, время, ответы на конкретные вопросы."
        },
        "misconception_map": {
          "status": "yes",
          "notes": "Да — question-analysis на уровне класса показывает типичные misconceptions; 'live data to target misconceptions'."
        },
        "ai_content_gen": {
          "status": "yes",
          "notes": "Авто-проверка, авто-назначение заданий; AI-генерации урока нет; дифференциация — через путь нуггетов."
        },
        "ai_insights": {
          "status": "partial",
          "notes": "Дашборд указывает кого подтянуть; рекомендация групп — частично через сегментацию по результату."
        },
        "group_adaptation": {
          "status": "no",
          "notes": "Нет (индивидуальные nuggets)"
        },
        "parent_report": {
          "status": "yes",
          "notes": "Есть Parent Portal/отчёты, но в меньшей степени продукта; основной адресат — учитель."
        }
      },
      "data_tier": "A"
    },
    {
      "id": "knowre",
      "name": "Knowre",
      "segment": "B2G+B2C",
      "age_range": "1–12 классы",
      "geography": "США (ребрендинг 2023)",
      "evidence": "Нет публичных RCT.",
      "ai_moat": "Adaptive math с step-by-step scaffolding. После ребрендинга 2023 данные ограничены.",
      "url": "https://knowre.com",
      "summary_short": "Adaptive math K-12 с step-by-step scaffolding. После ребрендинга 2023 — свежих данных мало.",
      "summary_long": "Adaptive K-12 math platform. Step-by-step scaffolding при ошибках. После ребрендинга 2023 модель и позиционирование изменились — актуальные данные требуют верификации.",
      "strengths": [
        "Step-by-step scaffolding"
      ],
      "weaknesses": [
        "Актуальные данные после ребрендинга 2023 ограничены",
        "Нет публичных RCT"
      ],
      "open_questions": [
        "[P1] После ребрендинга 2023 — что изменилось в модели?"
      ],
      "screenshots": [],
      "features": {},
      "data_tier": "B"
    },
    {
      "id": "matific",
      "name": "Matific",
      "segment": "B2G+B2C",
      "age_range": "K-6 (~5–12 лет)",
      "geography": "Глобально (50+ стран)",
      "evidence": "Нет публичных независимых RCT. Вендорские данные.",
      "ai_moat": "Игровые математические активности. Adaptive difficulty. Соответствие различным национальным стандартам.",
      "url": "https://matific.com",
      "summary_short": "Game-based adaptive math K-6 для 50+ стран. B2G для школ + B2C. Соответствует множеству национальных образовательных стандартов.",
      "summary_long": "Game-based adaptive math K-6. 50+ стран. Adaptive difficulty. Игровые активности встроены в curriculum. B2G для школ + B2C для домашнего использования.",
      "strengths": [
        "50+ стран — опыт локализации под разные стандарты"
      ],
      "weaknesses": [
        "Нет данных о AI глубине",
        "Нет публичных RCT"
      ],
      "open_questions": [],
      "screenshots": [],
      "features": {},
      "data_tier": "B"
    }
  ],
  "metadata": {
    "updated_at": "2026-05-22T15:34:41.518007",
    "source_files": [
      "Competitors_matrix.xlsx",
      "Research_addendum_v3.docx",
      "Questions_per_company_v2.docx",
      "Speech_for_deck_v2.docx",
      "Competitive_Analysis_Deck_final.pptx"
    ],
    "notes": "Tier A = companies with full Excel feature matrix (16 as of v2). Tier B = companies with partial data (PPTX overview + Research addendum); companies promoted to Tier A are automatically excluded from Tier B. Feature statuses in Tier A are AUTO-DETECTED from cell text (heuristic). All original cell text is preserved in 'notes' fields. Excluded (1:1 or B2C home only): Mathema, Third Space Learning, Grokkoli, Photomath, QANDA, BYJU'S, Smartick, Synthesis, Prodigy. Fields needing manual review: feature statuses, strengths, weaknesses, summary_long."
  }
};
