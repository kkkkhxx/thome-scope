
const acc = document.querySelectorAll(".accordion");
acc.forEach(btn => {
    btn.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

// เมื่อ scroll ลงเกิน 200px ให้โชว์ปุ่ม
window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// เมื่อคลิกปุ่มให้ scroll ขึ้นไปบนสุดอย่างนุ่มนวล
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    document.getElementById("navbarMenu").classList.toggle("show");
}

function toggleDropdown(event) {
    event.preventDefault();

    // ปิด dropdown อื่น ๆ ก่อน
    document.querySelectorAll('.dropdown').forEach((dropdown) => {
        if (dropdown !== event.target.closest('.dropdown')) {
            dropdown.classList.remove('open');
        }
    });

    // toggle dropdown ปัจจุบัน
    const current = event.target.closest('.dropdown');
    current.classList.toggle('open');
}
//-------------------------------------- Video Section --------------------------------------
const videos = [
    {
        title: "ตรวจสอบระบบป้องกันไฟดูดในบ้าน",
        youtubeId: "5Y9ur1Tinto",
        category: "ไฟฟ้า"
    },
    {
        title: "ตรวจสอบการทำงานของของพัดลมดูดอากาศ",
        youtubeId: "ewBRlikK8gQ",
        category: "ไฟฟ้า"
    },
    {
        title: "ตรวจสอบไฟฉุกเฉินในบ้าน",
        youtubeId: "oZir1q6zNdQ",
        category: "ไฟฟ้า"
    },
    {
        title: "ตรวจสอบสายสัญญาณ TV",
        youtubeId: "A7vUrgi7IK0",
        category: "ไฟฟ้า"
    },
    {
        title: "ตรวจสอบค่าความต้านทานหลักดิน",
        youtubeId: "qdTwTero_Ps",
        category: "ไฟฟ้า"
    },
    {
        title: "ตรวจสอบอุณหภูมิ ความร้อนสะสมในตู้ไฟ ด้วยกล้องอินฟาเรด",
        youtubeId: "eeaIGr8QrXc",
        category: "ไฟฟ้า"
    },
    {
        title: "ตรวจสอบการเข้าสายเต้ารับไฟฟ้าด้วย Circuit Analyzer",
        youtubeId: "pQ-05JFbG-A",
        category: "ไฟฟ้า"
    },
    {
        title: "ตรวจสอบขั้วเต้ารับด้วยเครื่อง Socket Tester",
        youtubeId: "5VMgaPMu1b8",
        category: "ไฟฟ้า"
    }, {
        title: "การตรวจสอบลำดับเฟสด้วยเครื่อง 3 Phase Rotation Tester",
        youtubeId: "eew9XR7X5KI",
        category: "ไฟฟ้า"
    },
    {
        title: "ตรวจสอบการเข้าสายสัญญาณ LAN",
        youtubeId: "Lqn7mgfJ2wA",
        category: "ไฟฟ้า"
    },
    {
        title: "การตรวจวัดแรงดันภายในตู้ไฟฟ้า ด้วยเครื่อง Mini Clamp Meter",
        youtubeId: "TS4yo6bpOp0",
        category: "ไฟฟ้า"
    },
    {
        title: "การตรวจวัดแรงดันภายในตู้ไฟฟ้าด้วยเครื่อง Clamp Meter",
        youtubeId: "t2LedhVqRFw",
        category: "ไฟฟ้า"
    },
    {
        title: "ทดสอบเบรกเกอร์กันดูดด้วยเครื่อง RCD/Loop Tester",
        youtubeId: "Lqn7mgfJ2wA",
        category: "ไฟฟ้า"
    },
    {
        title: "การตรวจสอบการทำงานของเต้ารับ USB",
        youtubeId: "6L4aocupzXE",
        category: "ไฟฟ้า"
    },
    {
        title: "การตรวจสอบกระแสไฟฟ้าด้วยเครื่อง Non-Contact Voltage Detector",
        youtubeId: "q8K6k2_K44c",
        category: "ไฟฟ้า"
    },
    {
        title: "การตรวจสอบสายสัญญาณ TEL ด้วยเครื่อง Cable Tester",
        youtubeId: "vZXYj2rQZ-4",
        category: "ไฟฟ้า"
    },
    {
        title: "การตรวจวัดแรงดันภายในตู้ไฟฟ้าด้วยเครื่อง Electrical Tester",
        youtubeId: "yxFJAhlC33U",
        category: "ไฟฟ้า"
    },
    {
        title: "ตรวจสอบการติดตั้งมิเตอร์ไฟฟ้า",
        youtubeId: "Tiik2GahPyw",
        category: "ไฟฟ้า"
    },
    {
        title: "🕵🏻 เคยสงสัยมั้ย ตู้ไฟบ้านข้างในมีอะไร แล้วช่างตรวจยังไงบ้าง ⚡️⚡️",
        youtubeId: "smJwlUiFxVQ",
        category: "ไฟฟ้า"
    },
    {
        title: "สายไฟทำไมต้องมีหลายสี แล้วแต่ละสีต่างกันยังไง ⁉️",
        youtubeId: "4IhuFbBxApA",
        category: "ไฟฟ้า"
    },
    {
        title: "วิธีตรวจสอบถังน้ำดีในบ้าน by ต.ตรวจบ้าน",
        youtubeId: "x9qWAwpxBUY",
        category: "สุขาภิบาล"
    }
    ,
    {
        title: "วิธีดูขนาดถังน้ำดี🕵🏻✨",
        youtubeId: "UAS785PV0zI",
        category: "สุขาภิบาล"
    }
    ,
    {
        title: "EP:6 น้ำไม่ระบาย/ท่อตัน!!! ตรวจยังไง | ตรวจบ้าน ตรวจคอนโด ก่อนรับโอน by ต.ตรวจบ้าน",
        youtubeId: "uZj7mX7q8lE",
        category: "สุขาภิบาล"
    }
    ,
    {
        title: "ถังบำบัดแตก ดูยังไง? | ต.ตรวจบ้าน",
        youtubeId: "5idu9ZwJGiI",
        category: "สุขาภิบาล"
    }
    ,
    {
        title: "ตรวจบ้านวันละตอนEP.2 I วิธีตรวจสอบท่อน้ำทิ้งชักโครก",
        youtubeId: "J4-Yi7Yv7k4",
        category: "สุขาภิบาล"
    }
    ,
    {
        title: "บ่อดักไขมันตรวจยังไง⁉️ วิธีดูแลรักษามีอะไรบ้าง🕵🏻",
        youtubeId: "R9l5mrLSNCE",
        category: "สุขาภิบาล"
    },
    {
        title: "#น้ํารั่ว #ฝ้าเพดาน #ตรวจสอบได้ ยังไง!?",
        youtubeId: "JnS0_QLg6kY",
        category: "รั่วซึม"
    },
    {
        title: "ต.ตรวจบ้านพาดูน้ำรั่วฝ้า EP:2 | น้ำรั่วฝ้า ตรวจกันยังไง",
        youtubeId: "qvZPEFo7wb8",
        category: "รั่วซึม"
    },
    {
        title: "ตรวจบ้าน ตรวจคอนโด ก่อนรับโอน by ต.ตรวจบ้าน | ต.ตรวจบ้านพาดูน้ำรั่วฝ้าด้วยกล้องวัดอุณหภูมิ!!!",
        youtubeId: "tH6SI2Lw1g8",
        category: "รั่วซึม"
    },
    {
        title: "ตรวจบ้าน ตรวจคอนโด ก่อนรับโอนกรรมสิทธิ์ by ต.ตรวจบ้าน | วิธีตรวจสอบการรั่วซึมโดยกล้องวัดอุณหภูมิ",
        youtubeId: "eyqyh2nOewE",
        category: "รั่วซึม"
    }
];

function renderYouTubeVideos(filter = "ไฟฟ้า") {
    const container = document.getElementById('video-list');
    container.innerHTML = ""; // clear previous content

    // Group videos by category
    const grouped = {};
    videos.forEach(video => {
        if (filter !== "all" && video.category !== filter) return;
        if (!grouped[video.category]) {
            grouped[video.category] = [];
        }
        grouped[video.category].push(video);
    });

    // Render grouped video sections
    for (const category in grouped) {
        const section = document.createElement('div');
        section.className = 'video_category';

        // const title = document.createElement('h3');
        // title.textContent = category;
        // title.className = 'title';
        // section.appendChild(title);

        grouped[category].forEach(video => {
            const div = document.createElement('div');
            div.className = 'video_container';
            div.innerHTML = `
        <div class="video_frame">
          <iframe src="https://www.youtube.com/embed/${video.youtubeId}" frameborder="0" allowfullscreen></iframe>
        </div>
        <p class="video_title">${video.title}</p>
      `;
            section.appendChild(div);
        });

        container.appendChild(section);
    }
}

// ✅ กรองตาม dropdown
document.addEventListener("DOMContentLoaded", () => {
    renderYouTubeVideos();

    const filter = document.getElementById('categoryFilter');
    filter.addEventListener("change", () => {
        renderYouTubeVideos(filter.value);
    });
});

