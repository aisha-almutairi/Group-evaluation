document.querySelectorAll(".vote-btn").forEach(btn => {
    btn.addEventListener("click", async () => {

        // اسم المجموعة اللي نضغط عليها
        const group = btn.dataset.group;

        // إرسال التصويت إلى Vercel function
        const res = await fetch("/api/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ group })
        });

        // التحقق من نجاح التصويت
        if (res.ok) {
            alert("✔ تم تسجيل صوتك بنجاح");
        } else {
            alert("❌ فشل تسجيل التصويت — شيّكي Vercel functions");
        }

    });
});
