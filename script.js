/* =====================================================
   ENGLISH DATABASE DICTIONARY
   Database X RPL
   ===================================================== */

const terms = [

{
    id: "database",
    term: "Database",
    meaning: "Basis data",
    category: "Basic Database",
    definition: "A structured collection of data that is stored and managed electronically.",
    explanation: "Kumpulan data yang disusun secara terstruktur dan disimpan agar mudah dikelola, dicari, dan digunakan.",
    example: "The school stores student information in a database.",
    translation: "Sekolah menyimpan informasi siswa di dalam database."
},

{
    id: "table",
    term: "Table",
    meaning: "Tabel",
    category: "Database Structure",
    definition: "A structure used to organize data into rows and columns.",
    explanation: "Struktur database yang digunakan untuk menyimpan data dalam bentuk baris dan kolom.",
    example: "The student table contains information about all students.",
    translation: "Tabel siswa berisi informasi tentang semua siswa."
},

{
    id: "column",
    term: "Column",
    meaning: "Kolom",
    category: "Database Structure",
    definition: "A vertical set of data in a database table.",
    explanation: "Bagian vertikal pada tabel yang menyimpan jenis data tertentu.",
    example: "The name column contains student names.",
    translation: "Kolom nama berisi nama-nama siswa."
},

{
    id: "row",
    term: "Row",
    meaning: "Baris",
    category: "Database Structure",
    definition: "A horizontal record of data in a database table.",
    explanation: "Baris yang mewakili satu kumpulan data atau satu record.",
    example: "Each row represents one student.",
    translation: "Setiap baris mewakili satu siswa."
},

{
    id: "record",
    term: "Record",
    meaning: "Rekaman data",
    category: "Basic Database",
    definition: "A complete set of related data stored in a database.",
    explanation: "Sekumpulan data yang saling berkaitan dan biasanya direpresentasikan sebagai satu baris.",
    example: "The database contains a record for each student.",
    translation: "Database tersebut memiliki satu record untuk setiap siswa."
},

{
    id: "field",
    term: "Field",
    meaning: "Bidang data",
    category: "Database Structure",
    definition: "A single piece of information within a record.",
    explanation: "Satu bagian data tertentu dalam sebuah record.",
    example: "The email field stores the user's email address.",
    translation: "Field email menyimpan alamat email pengguna."
},

{
    id: "primary-key",
    term: "Primary Key",
    meaning: "Kunci utama",
    category: "Database Structure",
    definition: "A field that uniquely identifies each record in a table.",
    explanation: "Kolom yang digunakan untuk membedakan setiap record secara unik.",
    example: "Student ID is used as the primary key.",
    translation: "ID siswa digunakan sebagai primary key."
},

{
    id: "foreign-key",
    term: "Foreign Key",
    meaning: "Kunci asing",
    category: "Database Structure",
    definition: "A field that creates a relationship between two database tables.",
    explanation: "Kolom yang menghubungkan satu tabel dengan tabel lainnya.",
    example: "The class ID is used as a foreign key.",
    translation: "ID kelas digunakan sebagai foreign key."
},

{
    id: "query",
    term: "Query",
    meaning: "Permintaan data",
    category: "SQL",
    definition: "A request for specific information from a database.",
    explanation: "Perintah atau permintaan untuk mengambil atau mengolah data dari database.",
    example: "The application sends a query to the database.",
    translation: "Aplikasi mengirim query ke database."
},

{
    id: "sql",
    term: "SQL",
    meaning: "Structured Query Language",
    category: "SQL",
    definition: "A language used to communicate with and manage relational databases.",
    explanation: "Bahasa yang digunakan untuk mengakses dan mengelola database relasional.",
    example: "We use SQL to retrieve student data.",
    translation: "Kami menggunakan SQL untuk mengambil data siswa."
},

{
    id: "dbms",
    term: "Database Management System",
    meaning: "Sistem Manajemen Basis Data",
    category: "Basic Database",
    definition: "Software used to create, manage, and control databases.",
    explanation: "Perangkat lunak yang digunakan untuk membuat dan mengelola database.",
    example: "MySQL is a popular database management system.",
    translation: "MySQL adalah sistem manajemen database yang populer."
},

{
    id: "relational-database",
    term: "Relational Database",
    meaning: "Database relasional",
    category: "Basic Database",
    definition: "A database that stores data in related tables.",
    explanation: "Database yang menyimpan data dalam tabel-tabel yang saling berhubungan.",
    example: "MySQL is a relational database system.",
    translation: "MySQL adalah sistem database relasional."
},

{
    id: "nosql",
    term: "NoSQL",
    meaning: "Non-relational database",
    category: "Advanced Database",
    definition: "A type of database designed for flexible and non-tabular data.",
    explanation: "Jenis database yang tidak selalu menggunakan struktur tabel relasional.",
    example: "MongoDB is a popular NoSQL database.",
    translation: "MongoDB adalah database NoSQL yang populer."
},

{
    id: "schema",
    term: "Schema",
    meaning: "Skema database",
    category: "Database Structure",
    definition: "The logical structure or design of a database.",
    explanation: "Rancangan struktur database yang menjelaskan tabel, kolom, dan hubungan data.",
    example: "The developer designed the database schema.",
    translation: "Developer merancang skema database."
},

{
    id: "index",
    term: "Index",
    meaning: "Indeks",
    category: "Advanced Database",
    definition: "A data structure that improves the speed of data retrieval.",
    explanation: "Struktur yang membantu mempercepat pencarian data dalam database.",
    example: "An index can make a query run faster.",
    translation: "Indeks dapat membuat query berjalan lebih cepat."
},

{
    id: "constraint",
    term: "Constraint",
    meaning: "Batasan",
    category: "Database Structure",
    definition: "A rule that controls the type of data that can be stored.",
    explanation: "Aturan yang digunakan untuk membatasi data yang dapat dimasukkan ke database.",
    example: "The primary key constraint prevents duplicate values.",
    translation: "Constraint primary key mencegah nilai yang duplikat."
},

{
    id: "normalization",
    term: "Normalization",
    meaning: "Normalisasi",
    category: "Advanced Database",
    definition: "The process of organizing data to reduce redundancy.",
    explanation: "Proses mengatur data agar lebih terstruktur dan mengurangi pengulangan data.",
    example: "Database normalization helps reduce duplicate data.",
    translation: "Normalisasi database membantu mengurangi data yang duplikat."
},

{
    id: "transaction",
    term: "Transaction",
    meaning: "Transaksi",
    category: "Advanced Database",
    definition: "A sequence of database operations treated as one unit.",
    explanation: "Sekumpulan operasi database yang dianggap sebagai satu kesatuan.",
    example: "The payment process is handled as a database transaction.",
    translation: "Proses pembayaran ditangani sebagai transaksi database."
},

{
    id: "backup",
    term: "Backup",
    meaning: "Cadangan data",
    category: "Database Security",
    definition: "A copy of data created to protect against data loss.",
    explanation: "Salinan data yang dibuat sebagai perlindungan jika data utama hilang.",
    example: "The administrator creates a database backup every day.",
    translation: "Administrator membuat backup database setiap hari."
},

{
    id: "restore",
    term: "Restore",
    meaning: "Memulihkan",
    category: "Database Security",
    definition: "The process of recovering data from a backup.",
    explanation: "Proses mengembalikan data menggunakan salinan backup.",
    example: "The administrator restored the database after the failure.",
    translation: "Administrator memulihkan database setelah terjadi kerusakan."
},

{
    id: "server",
    term: "Server",
    meaning: "Server",
    category: "Basic Database",
    definition: "A computer or system that provides data or services to other computers.",
    explanation: "Komputer atau sistem yang menyediakan data dan layanan kepada perangkat lain.",
    example: "The database is running on a server.",
    translation: "Database berjalan pada sebuah server."
},

{
    id: "client",
    term: "Client",
    meaning: "Klien",
    category: "Basic Database",
    definition: "A device or application that requests services from a server.",
    explanation: "Perangkat atau aplikasi yang meminta layanan dari server.",
    example: "The client sends a request to the database server.",
    translation: "Client mengirim permintaan ke database server."
},

{
    id: "data",
    term: "Data",
    meaning: "Data",
    category: "Basic Database",
    definition: "Facts or information that can be stored and processed.",
    explanation: "Fakta atau informasi yang dapat disimpan dan diolah.",
    example: "Student names are stored as data.",
    translation: "Nama siswa disimpan sebagai data."
},

{
    id: "information",
    term: "Information",
    meaning: "Informasi",
    category: "Basic Database",
    definition: "Processed data that has meaning and value.",
    explanation: "Data yang telah diproses sehingga memiliki makna atau manfaat.",
    example: "The report provides useful information.",
    translation: "Laporan tersebut memberikan informasi yang berguna."
},

{
    id: "attribute",
    term: "Attribute",
    meaning: "Atribut",
    category: "Database Structure",
    definition: "A property or characteristic of an entity.",
    explanation: "Karakteristik atau properti yang dimiliki oleh suatu entitas.",
    example: "Name and age are attributes of a student.",
    translation: "Nama dan umur adalah atribut seorang siswa."
},

{
    id: "entity",
    term: "Entity",
    meaning: "Entitas",
    category: "Database Structure",
    definition: "A person, object, place, or concept represented in a database.",
    explanation: "Objek atau konsep yang datanya disimpan dalam database.",
    example: "A student is an entity in the school database.",
    translation: "Siswa merupakan entitas dalam database sekolah."
},

{
    id: "relationship",
    term: "Relationship",
    meaning: "Hubungan",
    category: "Database Structure",
    definition: "A connection between entities or tables.",
    explanation: "Hubungan antara satu entitas atau tabel dengan yang lainnya.",
    example: "The relationship connects students with their classes.",
    translation: "Hubungan tersebut menghubungkan siswa dengan kelas mereka."
},

{
    id: "view",
    term: "View",
    meaning: "Tampilan virtual",
    category: "Advanced Database",
    definition: "A virtual table based on the result of a database query.",
    explanation: "Tabel virtual yang dibuat berdasarkan hasil query.",
    example: "The administrator created a view for student reports.",
    translation: "Administrator membuat view untuk laporan siswa."
},

{
    id: "trigger",
    term: "Trigger",
    meaning: "Pemicu otomatis",
    category: "Advanced Database",
    definition: "A database action that automatically runs when a specific event occurs.",
    explanation: "Perintah yang otomatis dijalankan ketika suatu kondisi atau event terjadi.",
    example: "A trigger updates the log automatically.",
    translation: "Trigger memperbarui log secara otomatis."
},

{
    id: "stored-procedure",
    term: "Stored Procedure",
    meaning: "Prosedur tersimpan",
    category: "Advanced Database",
    definition: "A group of SQL statements stored and executed on a database server.",
    explanation: "Sekumpulan perintah SQL yang disimpan di dalam database.",
    example: "The stored procedure generates the monthly report.",
    translation: "Stored procedure menghasilkan laporan bulanan."
},

{
    id: "join",
    term: "Join",
    meaning: "Penggabungan tabel",
    category: "SQL",
    definition: "An SQL operation used to combine data from multiple tables.",
    explanation: "Operasi SQL untuk menggabungkan data dari beberapa tabel.",
    example: "The query uses a join to combine two tables.",
    translation: "Query menggunakan join untuk menggabungkan dua tabel."
},

{
    id: "inner-join",
    term: "Inner Join",
    meaning: "Penggabungan data yang cocok",
    category: "SQL",
    definition: "A join that returns records with matching values in both tables.",
    explanation: "Join yang hanya menampilkan data yang memiliki pasangan di kedua tabel.",
    example: "The inner join returns matching student records.",
    translation: "Inner join menampilkan record siswa yang cocok."
},

{
    id: "left-join",
    term: "Left Join",
    meaning: "Penggabungan dari tabel kiri",
    category: "SQL",
    definition: "A join that returns all records from the left table and matching records from the right table.",
    explanation: "Join yang menampilkan semua data dari tabel kiri dan data yang cocok dari tabel kanan.",
    example: "The left join displays all students and their classes.",
    translation: "Left join menampilkan semua siswa dan kelas mereka."
},

{
    id: "right-join",
    term: "Right Join",
    meaning: "Penggabungan dari tabel kanan",
    category: "SQL",
    definition: "A join that returns all records from the right table and matching records from the left table.",
    explanation: "Join yang menampilkan semua data dari tabel kanan dan data yang cocok dari tabel kiri.",
    example: "The right join keeps all records from the right table.",
    translation: "Right join mempertahankan semua record dari tabel kanan."
},

{
    id: "crud",
    term: "CRUD",
    meaning: "Create, Read, Update, Delete",
    category: "Database Operations",
    definition: "The four basic operations for managing data.",
    explanation: "Empat operasi dasar untuk mengelola data yaitu Create, Read, Update, dan Delete.",
    example: "A database application should support CRUD operations.",
    translation: "Aplikasi database seharusnya mendukung operasi CRUD."
},

{
    id: "insert",
    term: "Insert",
    meaning: "Memasukkan data",
    category: "Database Operations",
    definition: "An SQL operation used to add new data to a table.",
    explanation: "Perintah SQL yang digunakan untuk menambahkan data baru.",
    example: "The INSERT command adds a new student.",
    translation: "Perintah INSERT menambahkan siswa baru."
},

{
    id: "select",
    term: "Select",
    meaning: "Memilih atau mengambil data",
    category: "SQL",
    definition: "An SQL command used to retrieve data from a database.",
    explanation: "Perintah SQL untuk mengambil atau menampilkan data.",
    example: "The SELECT command displays student names.",
    translation: "Perintah SELECT menampilkan nama siswa."
},

{
    id: "update",
    term: "Update",
    meaning: "Memperbarui data",
    category: "Database Operations",
    definition: "An SQL operation used to modify existing data.",
    explanation: "Perintah yang digunakan untuk mengubah data yang sudah ada.",
    example: "The UPDATE command changes the student's address.",
    translation: "Perintah UPDATE mengubah alamat siswa."
},

{
    id: "delete",
    term: "Delete",
    meaning: "Menghapus data",
    category: "Database Operations",
    definition: "An SQL operation used to remove data from a table.",
    explanation: "Perintah untuk menghapus data dari tabel.",
    example: "The DELETE command removes an old record.",
    translation: "Perintah DELETE menghapus record lama."
},

{
    id: "validation",
    term: "Validation",
    meaning: "Validasi",
    category: "Database Security",
    definition: "The process of checking whether data meets specific requirements.",
    explanation: "Proses memeriksa apakah data sesuai dengan aturan yang ditentukan.",
    example: "Data validation checks the user's email address.",
    translation: "Validasi data memeriksa alamat email pengguna."
},

{
    id: "authentication",
    term: "Authentication",
    meaning: "Autentikasi",
    category: "Database Security",
    definition: "The process of verifying the identity of a user.",
    explanation: "Proses untuk memastikan identitas pengguna.",
    example: "Authentication is required before accessing the system.",
    translation: "Autentikasi diperlukan sebelum mengakses sistem."
},

{
    id: "authorization",
    term: "Authorization",
    meaning: "Otorisasi",
    category: "Database Security",
    definition: "The process of determining what a user is allowed to access or do.",
    explanation: "Proses menentukan hak akses pengguna terhadap sistem atau data.",
    example: "Authorization controls what data users can access.",
    translation: "Otorisasi mengatur data yang dapat diakses pengguna."
},

{
    id: "encryption",
    term: "Encryption",
    meaning: "Enkripsi",
    category: "Database Security",
    definition: "The process of converting data into a protected form.",
    explanation: "Proses mengubah data menjadi bentuk yang terlindungi agar tidak mudah dibaca pihak yang tidak berwenang.",
    example: "Encryption protects sensitive database information.",
    translation: "Enkripsi melindungi informasi database yang sensitif."
}

];


/* =====================================================
   TEXT TO SPEECH
   ===================================================== */

let currentUtterance = null;

function speakText(text) {

    if (!("speechSynthesis" in window)) {
        alert("Browser ini tidak mendukung Text-to-Speech.");
        return;
    }

    window.speechSynthesis.cancel();

    currentUtterance = new SpeechSynthesisUtterance(text);

    currentUtterance.lang = "en-US";
    currentUtterance.rate = 0.85;
    currentUtterance.pitch = 1;
    currentUtterance.volume = 1;

    window.speechSynthesis.speak(currentUtterance);
}


function stopSpeech() {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

}


/* =====================================================
   THEME
   ===================================================== */

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

    updateThemeIcon();

}


function updateThemeIcon() {

    const buttons =
        document.querySelectorAll(".theme-btn");

    const isLight =
        document.body.classList.contains("light-mode");

    buttons.forEach(button => {

        button.innerHTML = isLight
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

    });

}


function loadTheme() {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

    updateThemeIcon();

}


/* =====================================================
   MOBILE NAVIGATION
   ===================================================== */

function setupMenu() {

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");

    if (!menuToggle || !mainNav) return;

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("show");

    });

}


/* =====================================================
   DICTIONARY CARD
   ===================================================== */

function createTermCard(item) {

    return `

        <article class="term-card">

            <div class="term-top">

                <span class="category-tag">
                    ${item.category}
                </span>

                <button
                    class="speaker-btn"
                    onclick="event.preventDefault(); speakText('${escapeSpeech(item.term)}')"
                    title="Dengarkan istilah"
                >
                    <i class="fa-solid fa-volume-high"></i>
                </button>

            </div>

            <h2>${item.term}</h2>

            <div class="meaning">
                ${item.meaning}
            </div>

            <p>
                ${item.definition}
            </p>

            <div class="term-example">

                <strong>Example:</strong>

                <div class="example-row">

                    <span>
                        ${item.example}
                    </span>

                    <button
                        class="mini-speaker"
                        onclick="event.preventDefault(); speakText('${escapeSpeech(item.example)}')"
                        title="Dengarkan contoh"
                    >
                        <i class="fa-solid fa-volume-high"></i>
                    </button>

                </div>

            </div>

            <a
                href="detail.html?id=${item.id}"
                class="detail-link"
            >
                View Details
                <i class="fa-solid fa-arrow-right"></i>
            </a>

        </article>

    `;
}


function escapeSpeech(text) {

    return text
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"');

}


/* =====================================================
   DICTIONARY PAGE
   ===================================================== */

let currentCategory = "All";
let currentSearch = "";


function renderDictionary() {

    const container =
        document.getElementById("termsContainer");

    if (!container) return;

    const filtered = terms.filter(item => {

        const categoryMatch =
            currentCategory === "All" ||
            item.category === currentCategory;

        const searchText =
            (
                item.term +
                " " +
                item.meaning +
                " " +
                item.definition +
                " " +
                item.explanation
            ).toLowerCase();

        const searchMatch =
            searchText.includes(
                currentSearch.toLowerCase()
            );

        return categoryMatch && searchMatch;

    });


    container.innerHTML =
        filtered.map(createTermCard).join("");


    const resultCount =
        document.getElementById("resultCount");

    if (resultCount) {

        resultCount.textContent =
            `${filtered.length} istilah ditemukan`;

    }


    const emptyState =
        document.getElementById("emptyState");

    if (emptyState) {

        emptyState.style.display =
            filtered.length === 0
                ? "block"
                : "none";

    }

}


/* =====================================================
   SEARCH + FILTER
   ===================================================== */

function setupDictionary() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) return;


    searchInput.addEventListener("input", event => {

        currentSearch =
            event.target.value;

        renderDictionary();

    });


    const filterButtons =
        document.querySelectorAll(".filter-btn");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            renderDictionary();

        });

    });


    const params =
        new URLSearchParams(window.location.search);

    const category =
        params.get("category");


    if (category) {

        currentCategory = category;

        filterButtons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category === category
            );

        });

    }


    renderDictionary();

}


/* =====================================================
   DETAIL PAGE
   ===================================================== */

function renderDetail() {

    const container =
        document.getElementById("detailContainer");

    if (!container) return;


    const params =
        new URLSearchParams(window.location.search);

    const id =
        params.get("id");


    const item =
        terms.find(term => term.id === id);


    if (!item) {

        container.innerHTML = `

            <div class="not-found">

                <i class="fa-solid fa-circle-question"></i>

                <h1>Term Not Found</h1>

                <p>
                    Istilah yang kamu cari tidak ditemukan.
                </p>

                <a href="dictionary.html"
                   class="btn btn-primary">
                    Back to Dictionary
                </a>

            </div>

        `;

        return;

    }


    container.innerHTML = `

        <div class="detail-card">

            <div class="detail-header">

                <div>

                    <span class="category-tag">
                        ${item.category}
                    </span>

                    <h1>${item.term}</h1>

                    <div class="detail-meaning">
                        ${item.meaning}
                    </div>

                </div>

                <button
                    class="big-speaker"
                    onclick="speakText('${escapeSpeech(item.term)}')"
                    title="Listen to term"
                >
                    <i class="fa-solid fa-volume-high"></i>
                </button>

            </div>


            <div class="detail-divider"></div>


            <div class="detail-grid">

                <div class="detail-box">

                    <div class="detail-label">
                        <i class="fa-solid fa-book"></i>
                        English Definition
                    </div>

                    <p>
                        ${item.definition}
                    </p>

                    <button
                        class="voice-button"
                        onclick="speakText('${escapeSpeech(item.definition)}')"
                    >
                        <i class="fa-solid fa-volume-high"></i>
                        Listen Definition
                    </button>

                </div>


                <div class="detail-box">

                    <div class="detail-label">
                        <i class="fa-solid fa-language"></i>
                        Indonesian Explanation
                    </div>

                    <p>
                        ${item.explanation}
                    </p>

                </div>


                <div class="detail-box example-box">

                    <div class="detail-label">
                        <i class="fa-solid fa-comment"></i>
                        Example Sentence
                    </div>

                    <p class="english-example">
                        "${item.example}"
                    </p>

                    <button
                        class="voice-button"
                        onclick="speakText('${escapeSpeech(item.example)}')"
                    >
                        <i class="fa-solid fa-volume-high"></i>
                        Listen Example
                    </button>

                </div>


                <div class="detail-box">

                    <div class="detail-label">
                        <i class="fa-solid fa-language"></i>
                        Indonesian Translation
                    </div>

                    <p>
                        "${item.translation}"
                    </p>

                </div>

            </div>


            <div class="detail-actions">

                <button
                    class="btn btn-primary"
                    onclick="speakText('${escapeSpeech(item.term + ". " + item.example)}')"
                >
                    <i class="fa-solid fa-volume-high"></i>
                    Listen Term & Example
                </button>

                <button
                    class="btn btn-outline"
                    onclick="stopSpeech()"
                >
                    <i class="fa-solid fa-stop"></i>
                    Stop Voice
                </button>

                <a
                    href="dictionary.html"
                    class="btn btn-outline"
                >
                    <i class="fa-solid fa-arrow-left"></i>
                    Back
                </a>

            </div>

        </div>

    `;

}


/* =====================================================
   INITIALIZE
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadTheme();

    setupMenu();

    setupDictionary();

    renderDetail();

});
