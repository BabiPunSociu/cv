const resource = {
  fullName: "Nguyễn Văn Dũng",
  jobFullStack: "Web Developer (Fullstack)",
  jobFrontEnd: "Frontend Developer",
  jobBackEnd: "Backend Developer",
  jobMobile: "Mobile Developer",
  jobDevOps: "DevOps",
  jobDataBase: "Database Developer",

  // Personal Information
  personalInformation: {
    fullName: "Nguyễn Văn Dũng",
    phone: "0971821742",

    emailTitle: "Nguyendung281002@gmail.com",
    emailLink: "Nguyendung281002@gmail.com",

    facebookTitle: "Facebook: Dũng Nguyễn",
    facebookLink: "https://www.facebook.com/tulien.thienxa/",

    githubTitle: "Github: Dũng Nguyễn",
    githubLink: "https://github.com/DungNguyenGitHub",

    linkedinTitle: "Linkedin: Dũng Nguyễn",
    linkedinLink: "https://www.linkedin.com/in/nguyen-van-dung-1b47b4279/",

    address: "Cầu Giấy, Hà Nội",
    dateOfBirth: "28/10/2002",
    gender: "Male / Nam",
  },

  en: {
    lang: "English",
    more: "See more here",

    linkGithubTitle: "GitHub:",
    linkDemoTitle: "Demo:",
    notAvailable: "Not available -.-",

    // career goals
    careerGoals: {
      careerGoalsTitle: "Career Goals",
      TitleShortTermCareerGoals: "Short-term",
      TitleLongTermCareerGoals: "Long-term",

      // Mục tiêu cho FullStack
      careerGoalsFullStackContent:
        "With a strong passion for programming, my career goal is to become a professional full-stack web developer. I aspire to explore and grasp the latest technologies in this field to create innovative and effective web solutions. I am committed to continuous learning and skill development to contribute maximally to the success of the organization. In the future, I hope to have the opportunity to lead a development team, where I can share my knowledge and experience with technology-enthusiastic colleagues. Specifically, I set a goal to strive to reach a junior level after 1.5 years, to continue developing my career from there.",

      // Mục tiêu cho Backend RPSoft
      careerGoalsBackendRPSoftContent: {
        // Ngắn hạn
        shortTerm:
          "Master the technologies and knowledge necessary for a backend developer position in the fintech field. Successfully complete assigned tasks, ensuring work quality and progress.",
        // Dài hạn
        longTerm:
          "Have extensive expertise in technology and knowledge related to fintech software development => Help other developers and contribute to the company's growth and success.",
      },

      // Mục tiêu cho Frontend
    },

    // Education
    education: {
      educationTitle: "Education",
      schools: [
        // schools[0] - Trường ĐH GTVT
        {
          schoolName: "University of Transport and Communications",
          // Thời gian bắt đầu học
          start: "October 2020",
          // Thời gian kết thúc học
          end: "August 2024 (Expected)",
          major: "Major: Information Technology",
          gpa: "GPA:3.0/4.0",
          // Các khóa học liên quan
          relevantCoursework: {
            backendRPSoft:
              "Relevant Coursework: C# programming; Winform programming; Web and Database Programming; Network programming; ...",
          },
        },
      ],
    },

    // Experience
    experience: {
      experienceTitle: "Work Experience",
      experiences: [
        // experiences[0] - CÔNG TY CỔ PHẦN MISA
        {
          companyName: "MISA JSC",
          // Thời gian bắt đầu làm việc
          start: "August 2023",
          // Thời gian kết thúc làm việc
          end: "November 2023",
          // Vị trí làm việc
          position: "Web Developer Full Stack",
          // Nội dung kinh nghiệm
          projects: [
            // Dự án [0]
            {
              // Tên dự án
              projectName:
                "Building employee management module - AMIS Accounting",
              technique: "Technology used: VueJS, C# ASP.NET, MariaDB",
              result:
                "Result: Build web applications with frontend, backend, database; Communicate via RESTful API; Clean Architecture; Export excel file; Unitest for functions; ...",
              github: "",
              demo: "",
            },
          ],
        },
      ],
    },

    // Project
    project: {
      projectTitle: "Projects",
      positionTitle: "Position",
      timeTitle: "Time:",

      projects: [
        // projects[0]
        {
          projectName: "Quản lý cơ sở dữ liệu cửa hàng cafe (oracle)",
          // Thời gian bắt đầu dự án
          start: "T9/2023",
          // Thời gian kết thúc dự án
          end: "T11/2023",
          // Vai trò trong dự án
          position: "Member",
          // Nội dung dự án
          content: [
            "Nhóm gồm 5 thành viên. Đạt điểm 9.5/10 vì nhóm chưa xây dựng website cho ứng dụng.",
          ],
        },

        // projects[1]
        {
          projectName: "WEBSITE HỌC NGOẠI NGỮ (PHP + MYSQL)",
          // Thời gian bắt đầu dự án
          start: "T9/2023",
          // Thời gian kết thúc dự án
          end: "T11/2023",
          // Vai trò trong dự án
          position: "Leader",
          // Nội dung dự án
          content: [
            "Nhóm gồm 4 thành viên. Đạt điểm 9.0/10 vì nhóm còn một số bug về PHP.",
          ],
        },

        // projects[2]
        {
          projectName: "WEBSITE SELLING CAFE",
          // Thời gian bắt đầu dự án
          start: "January 2023",
          // Thời gian kết thúc dự án
          end: "March 2023",
          // Vai trò trong dự án
          position: "Member",
          // Nội dung dự án
          content: {
            // Số thành viên tham gia
            memberNumber: "The group consists of 5 members.",
            // Công nghệ sử dụng
            technique:
              "Use C# ASP.NET CORE + SQL SERVER to build web applications according to the MVC model.",
            // Điểm số
            score: "Scored: 9.0/10.",
            // Chức năng chính
            mainTask: {
              title: "Building web applications has several main functions:",
              tasks: [
                // task[0]
                "Login, register, Change password, Forgot password",

                // task[1]
                "Display business data (Admin): Revenue parameters, visits,...; Sales status chart; Status and quantity of goods in warehouse; List of new customers in the last 7 days.",

                // task[2]
                "Manage account and user information: Avatar, Username, Email, Password, Address; Access rights; ...",

                // task[3]
                "Manage products and categories: Display list of products and categories; Search/Add/Edit/Delete products, categories.",

                // task[4]
                "Customer management: Display customer list; Search by many criteria (Code, Customer name, ...).",

                // task[5]
                "News management: Display news list; Search/Add/Edit/Delete news information.",

                // task[5]
                "Manage shopping cart: Add products, edit quantities, delete products from shopping cart; Go to Purchases/Checkout.",

                // task[6]
                "Display product categories, product lists; Display detailed product information; Search, pagination.",

                // task[7]
                "Manage purchase orders: Display a list of purchased orders and detailed order information.",
              ],
            },
          },
          // Link github:
          github: "https://github.com/DungNguyenGitHub/Website_BanCafe",
          // Link demo:
          demo: "",
        },

        // projects[3]
        {
          projectName: "APP XEM PHIM (ANDRIOD JAVA + REALTIME DATABASE)",
          // Thời gian bắt đầu dự án
          start: "T1/2023",
          // Thời gian kết thúc dự án
          end: "T3/2023",
          // Vai trò trong dự án
          position: "Leader",
          // Nội dung dự án
          content: [
            "Nhóm gồm 4 thành viên. Xây dựng ứng dụng di động android. Đạt điểm 8.5/10.",
          ],
        },

        // projects[4]
        {
          projectName: "WEBSITE DỰ BÁO THỜI TIẾT (WEBAPI)",
          // Thời gian bắt đầu dự án
          start: "T1/2023",
          // Thời gian kết thúc dự án
          end: "T2/2023",
          // Vai trò trong dự án
          position: "Leader",
          // Nội dung dự án
          content: ["Nhóm gồm 4 thành viên. Đạt điểm 9.0/10."],
        },

        // projects[5]
        {
          projectName: "SHOES STORE MANAGER",
          // Thời gian bắt đầu dự án
          start: "October 2022",
          // Thời gian kết thúc dự án
          end: "December 2022",
          // Vai trò trong dự án
          position: "Leader",
          // Nội dung dự án
          content: {
            // Số thành viên tham gia
            memberNumber: "The group consists of 4 members.",
            // Công nghệ sử dụng
            technique:
              "Use C# ASP.NET WINFORM + SQL SERVER to build desktop applications.",
            // Điểm số
            score: "Scored 9.0/10.",
            // Chức năng chính
            mainTask: {
              title:
                "Building desktop applications has several main functions:",
              tasks: [
                // task[0]
                "Login for sales staff and managers.",

                // task[1]
                "Sales management: Display list of invoices, sales invoice details; Search/Add/Edit/Delete sales invoices and invoice details.",

                // task[2]
                "Employee management: Display employee list; Search/Add/Edit/Delete employee information; Print Excel report.",

                // task[3]
                "Manage import goods: Display list of invoices, details of import invoices; Search/Add/Edit/Delete import invoices, import invoice details.",

                // task[4]
                "Warehouse management: Display product list; Search by many criteria (Code, Product name, Brand, Style, Price range, ...); Top 5 best-selling products in the last 30 days; Add new products; Print warehouse reports (Excel).",

                // task[5]
                "Customer management: Display customer list; Search/Add/Edit/Delete customer information; Print Excel report.",

                // task[5]
                "Export report (Excel): Revenue report by 1 optional day, Export excel file.",
              ],
            },
          },

          // Link github:
          github: "https://github.com/DungNguyenGitHub/QuanLyBanGiay",
          // Link demo:
          demo: "",
        },
      ],
    },

    // Skill
    skill: {
      title: "Skill",
      skills: [
        // Skill[0]
        {
          name: "HTML/CSS",
          shortContent: "",
          fullContent: "",
          level: "90",
        },

        // Skill[1]
        {
          name: "Javascript / JQuery / VueJs",
          shortContent:
            "Proficiency in: Event handling; Working with APIs; Asynchronous processing; DOM and BOM manipulation; Manipulate files; OOP programming; ...; Debug with ChromeDevTool, VueDevTool",
          fullContent: "",
          level: "80",
        },

        // Skill[2]
        {
          name: "C# ASP.Net Core (MVC + Web API)",
          shortContent:
            "Proficiency in: Database manipulation (Dapper, Entity Framework Core); Import/export files; Razor Pages; Dependency Injection; Event handling; Restfull API; Unit Test; ...",
          fullContent: "",
          level: "80",
        },

        // Skill[3]
        {
          name: "C# ASP.Net / WinForm",
          shortContent:
            "Proficiency in: Event handling; manipulate databases; import/export files; multithreading; library: DevExpress; ...",
          fullContent: "",
          level: "80",
        },

        // Skill[4]
        {
          name: "MVC, Clean Architecture",
          shortContent: "",
          fullContent: "",
          level: "80",
        },

        // Skill[5]
        {
          name: "SQL Server",
          shortContent:
            "Proficiency in: Relational database design; Standardized; CRUD; View, Procedure, Function, Trigger; Index; Manage Users, Roles; Transaction; Backup, Restore,...",
          fullContent: "",
          level: "80",
        },

        // Skill[6]
        {
          name: "MySQL / MariaDB",
          shortContent: "",
          fullContent: "",
          level: "85",
        },

        // Skill[7]
        {
          name: "Oracle",
          shortContent:
            "Understanding: Oracle Architecture; Instance Management; Manage Tablespaces, Datafiles; Storage structure; Management of rights and titles; PL-SQL language (Create, Select, Insert, Update, Delete, View, Procedure, Function, Trigger);...",
          fullContent: "",
          level: "70",
        },

        // Skill[8]
        {
          name: "Realtime Database (Firebase)",
          shortContent: "",
          fullContent: "",
          level: "80",
        },

        // Skill[9]
        {
          name: "Function-oriented analysis and design of information systems",
          shortContent: "",
          fullContent: "",
          level: "80",
        },

        // Skill[10]
        {
          name: "Object-oriented analysis and design of information systems",
          shortContent: "",
          fullContent: "",
          level: "80",
        },

        // Skill[11]
        {
          name: "Problem solving",
          shortContent: "",
          fullContent: "",
          level: "90",
        },

        // Skill[12]
        {
          name: "Independent working",
          shortContent: "",
          fullContent: "",
          level: "100",
        },

        // Skill[13]
        {
          name: "Teamwork",
          shortContent: "",
          fullContent: "",
          level: "100",
        },

        // Skill[14]
        {
          name: "Version control (Git / Github)",
          shortContent: "",
          fullContent: "",
          level: "90",
        },

        // Skill[15]
        {
          name: "Other programming languages: C/C++, Java, Python, PHP",
          shortContent: "",
          fullContent: "",
          level: "90",
        },

        // Skill[16]
        {
          name: "English",
          shortContent: "",
          fullContent: "",
          level: "50",
        },

        // Skill[17]
        {
          name: "Socket (TCP, UDP)",
          shortContent:
            "Proficiency: Using Stream Socket (TCP), Datagram Socket (UDP); Send/receive data by byte stream; Connection control; Multi-threaded; Encrypt/decrypt data; ...",
          fullContent: "",
          level: "80",
        },
      ],
    },
  },
  vi: {
    lang: "Tiếng việt",
    more: "Xem thêm ở đây",

    linkGithubTitle: "GitHub:",
    linkDemoTitle: "Demo:",
    notAvailable: "Chưa xây dựng -.-",

    // career goals
    careerGoals: {
      careerGoalsTitle: "Mục tiêu nghề nghiệp",
      TitleShortTermCareerGoals: "Ngắn hạn",
      TitleLongTermCareerGoals: "Dài hạn",

      careerGoalsFullStackContent:
        "Với niềm đam mê lập trình mạnh mẽ, mục tiêu trong sự nghiệp của tôi là trở thành một lập trình viên web full-stack chuyên nghiệp. Tôi mong muốn khám phá và nắm bắt các công nghệ mới nhất trong lĩnh vực này để tạo ra các giải pháp web sáng tạo và hiệu quả. Tôi cam kết học hỏi liên tục và phát triển kỹ năng để đóng góp tối đa cho sự thành công của tổ chức. Trong tương lai, tôi hy vọng có cơ hội lãnh đạo một nhóm phát triển, nơi tôi có thể chia sẻ kiến thức và kinh nghiệm của mình với các đồng nghiệp đam mê công nghệ. Cụ thể, tôi đặt mục tiêu phấn đấu để đạt đến cấp độ junior sau 1,5 năm, để tiếp tục phát triển sự nghiệp của mình từ đó. 😊 ",

      // Mục tiêu cho Backend RPSoft
      careerGoalsBackendRPSoftContent: {
        // Ngắn hạn
        shortTerm:
          "Nắm vững các công nghệ, kiến thức cần thiết cho vị trí backend developer trong lĩnh vực fintech. Hoàn thành tốt các nhiệm vụ được giao, đảm bảo chất lượng và tiến độ công việc.",
        // Dài hạn
        longTerm:
          "Có kiến thức chuyên môn sâu rộng về công nghệ và kiến thức liên quan đến phát triển phần mềm fintech => Giúp đỡ các developer khác và góp phần vào sự phát triển và thành công của công ty.",
      },

      // Mục tiêu cho Frontend
    },

    // Education
    education: {
      educationTitle: "Học vấn",
      schools: [
        // schools[0] - Trường ĐH GTVT
        {
          schoolName: "Trường Đại học Giao thông Vận tải",
          // Thời gian bắt đầu học
          start: "T09/2020",
          // Thời gian kết thúc học
          end: "T08/2024 (Dự kiến)",
          major: "Chuyên ngành: Công nghệ thông tin",
          gpa: "GPA: 3.0/4.0",
          // Các khóa học liên quan
          relevantCoursework: {
            backendRPSoft:
              "Các khóa học liên quan: Lập trình C#; Lập trình Winform; Lập trình Web, Cơ sở dữ liệu; Lập trình mạng; ...",
          },
        },
      ],
    },

    // Experience
    experience: {
      experienceTitle: "Kinh nghiệm làm việc",
      experiences: [
        // experiences[0] - CÔNG TY CỔ PHẦN MISA
        {
          companyName: "CÔNG TY CỔ PHẦN MISA",
          // Thời gian bắt đầu làm việc
          start: "08/2023",
          // Thời gian kết thúc làm việc
          end: "11/2023",
          // Vị trí làm việc
          position: "Web Developer Full Stack",
          // Nội dung kinh nghiệm
          projects: [
            // Dự án [0]
            {
              // Tên dự án
              projectName: "Xây dựng phân hệ quản lý nhân viên - AMIS Kế toán",
              technique: "Công nghệ sử dụng: VueJS, C# ASP.NET, MariaDB",
              result:
                "Kết quả: Xây dựng được ứng dụng web với frontend, backend, database; Giao tiếp thông qua RESTful API; Kiến trúc Clean Architecture; Xuất file excel; Unitest cho các hàm; ...",
              github: "",
              demo: "",
            },
          ],
        },
      ],
    },

    // Project
    project: {
      projectTitle: "Dự án",
      positionTitle: "Vị trí",
      timeTitle: "Thời gian:",

      projects: [
        // projects[0]
        {
          projectName: "Quản lý cơ sở dữ liệu cửa hàng cafe (oracle)",
          // Thời gian bắt đầu dự án
          start: "T9/2023",
          // Thời gian kết thúc dự án
          end: "T11/2023",
          // Vai trò trong dự án
          position: "Member",
          // Nội dung dự án
          content: [
            "Nhóm gồm 5 thành viên. Đạt điểm 9.5/10 vì nhóm chưa xây dựng website cho ứng dụng.",
          ],
        },

        // projects[1]
        {
          projectName: "WEBSITE HỌC NGOẠI NGỮ (PHP + MYSQL)",
          // Thời gian bắt đầu dự án
          start: "T9/2023",
          // Thời gian kết thúc dự án
          end: "T11/2023",
          // Vai trò trong dự án
          position: "Trưởng nhóm",
          // Nội dung dự án
          content: [
            "Nhóm gồm 4 thành viên. Đạt điểm 9.0/10 vì nhóm còn một số bug về PHP.",
          ],
        },

        // projects[2]
        {
          projectName: "WEBSITE BÁN CAFE",
          // Thời gian bắt đầu dự án
          start: "T1/2023",
          // Thời gian kết thúc dự án
          end: "T3/2023",
          // Vai trò trong dự án
          position: "Thành viên",
          // Nội dung dự án
          content: {
            // Số thành viên tham gia
            memberNumber: "Nhóm gồm 5 thành viên. Đạt điểm 9.0/10.",
            // Công nghệ sử dụng
            technique:
              "Sử dụng C# ASP.NET CORE + SQL SERVER để xây dựng ứng dụng web theo mô hình MVC.",
            // Điểm số
            score: "Đạt điểm 9.0/10.",
            // Chức năng chính
            mainTask: {
              title: "Xây dựng ứng dụng web có một số chức năng chính:",
              tasks: [
                // task[0]
                "Đăng nhập, đăng ký, Đổi mật khẩu, Quên mật khẩu",

                // task[1]
                "Hiển thị các dữ liệu tình hình kinh doanh (Admin): Thông số doanh thu, lượt truy cập,...; Biểu đồ tình trạng bán hàng; Tình trạng, số lượng hàng hóa trong kho; Danh sách các khách hàng mới trong 7 ngày gần nhất.",

                // task[2]
                "Quản lý thông tin tài khoản, người dùng: Avatar, Tên người dùng, Email, Mật khẩu, Địa chỉ; Quyền truy cập; ...",

                // task[3]
                "Quản lý sản phẩm, danh mục: Hiển thị danh sách sản phẩm, danh mục; Tìm kiếm/Thêm/Sửa/Xóa sản phẩm, danh mục.",

                // task[4]
                "Quản lý khách hàng: Hiển thị danh sách khách hàng; Tìm kiếm theo nhiều tiêu chí (Mã, Tên khách hàng, ...).",

                // task[5]
                "Quản lý tin tức: Hiển thị danh sách tin tức; Tìm kiếm/Thêm/Sửa/Xóa thông tin tin tức.",

                // task[5]
                "Quản lý giỏ hàng: Thêm sản phẩm, sửa số lượng, xóa sản phẩm khỏi giỏ hàng; Đi đến Mua hàng/Thanh toán.",

                // task[6]
                "Hiển thị danh mục sản phẩm, danh sách sản phẩm; Hiển thị thông tin chi tiết sản phẩm; Tìm kiếm, phân trang.",

                // task[7]
                "Quản lý đơn mua: Hiển thị danh sách các đơn hàng đã mua, thông tin chi tiết đơn hàng.",
              ],
            },
          },
          // Link github:
          github: "https://github.com/DungNguyenGitHub/Website_BanCafe",
          // Link demo:
          demo: "",
        },

        // projects[3]
        {
          projectName: "APP XEM PHIM (ANDRIOD JAVA + REALTIME DATABASE)",
          // Thời gian bắt đầu dự án
          start: "T1/2023",
          // Thời gian kết thúc dự án
          end: "T3/2023",
          // Vai trò trong dự án
          position: "Trưởng nhóm",
          // Nội dung dự án
          content: [
            "Nhóm gồm 4 thành viên. Xây dựng ứng dụng di động android. Đạt điểm 8.5/10.",
          ],
        },

        // projects[4]
        {
          projectName: "WEBSITE DỰ BÁO THỜI TIẾT (WEBAPI)",
          // Thời gian bắt đầu dự án
          start: "T1/2023",
          // Thời gian kết thúc dự án
          end: "T2/2023",
          // Vai trò trong dự án
          position: "Thành viên",
          // Nội dung dự án
          content: ["Nhóm gồm 4 thành viên. Đạt điểm 9.0/10."],
        },

        // projects[5]
        {
          projectName: "QUẢN LÝ CỬA HÀNG BÁN GIÀY",
          // Thời gian bắt đầu dự án
          start: "T10/2022",
          // Thời gian kết thúc dự án
          end: "T12/2022",
          // Vai trò trong dự án
          position: "Trưởng nhóm",
          // Nội dung dự án
          content: {
            // Số thành viên tham gia
            memberNumber: "Nhóm gồm 4 thành viên.",
            // Công nghệ sử dụng
            technique:
              "Sử dụng C# ASP.NET WINFORM + SQL SERVER để xây dựng ứng dụng desktop.",
            // Điểm số
            score: "Đạt điểm 9.0/10.",
            // Chức năng chính
            mainTask: {
              title: "Xây dựng ứng dụng desktop có một số chức năng chính:",
              tasks: [
                // task[0]
                "Đăng nhập cho nhân viên bán hàng, quản lý.",

                // task[1]
                "Quản lý bán hàng: Hiển thị danh sách hóa đơn, chi tiết hóa đơn bán hàng; Tìm kiếm/Thêm/Sửa/Xóa hóa đơn bán hàng, chi tiết hóa đơn.",

                // task[2]
                "Quản lý nhân viên: Hiện thị danh sách nhân viên; Tìm kiếm/Thêm/Sửa/Xóa thông tin nhân viên; In báo cáo Excel.",

                // task[3]
                "Quản lý nhập hàng: Hiển thị danh sách hóa đơn, chi tiết hóa đơn nhập hàng; Tìm kiếm/Thêm/Sửa/Xóa hóa đơn nhập hàng, chi tiết hóa đơn nhập hàng.",

                // task[4]
                "Quản lý kho: Hiển thị danh sách sản phẩm; Tìm kiếm theo nhiều tiêu chí (Mã, Tên sản phẩm, Thương hiệu, Kiểu dáng, Tầm giá, ...); Top 5 sản phẩm bán chạy nhất trong 30 ngày gần đây; Thêm sản phẩm mới; In báo cáo kho hàng (Excel).",

                // task[5]
                "Quản lý khách hàng: Hiển thị danh sách khách hàng; Tìm kiếm/Thêm/Sửa/Xóa thông tin khách hàng; In báo cáo Excel.",

                // task[5]
                "Xuất báo cáo (Excel): Báo cáo doanh thu theo 1 ngày tùy chọn, Xuất file excel.",
              ],
            },
          },
          // Link github:
          github: "https://github.com/DungNguyenGitHub/QuanLyBanGiay",
          // Link demo:
          demo: "",
        },
      ],
    },

    // Skill
    skill: {
      title: "Kỹ năng",
      skills: [
        // Skill[0]
        {
          name: "HTML/CSS",
          shortContent: "",
          fullContent: "",
          level: "90",
        },

        // Skill[1]
        {
          name: "Javascript / JQuery / VueJs",
          shortContent:
            "Thành thạo: Xử lý sự kiện; Thao tác với API; Xử lý bất đồng bộ; Thao tác DOM, BOM; Thao tác với file; Lập trình OOP; ...; Debug với ChromeDevTool, VueDevTool",
          fullContent: "",
          level: "80",
        },

        // Skill[2]
        {
          name: "C# ASP.Net Core (MVC + Web API)",
          shortContent:
            "Thành thạo: Thao tác cơ sở dữ liệu (Dapper, Entity Framework Core); Nhập/xuất file; Razor Pages; Dependency Injection; Xử lý sự kiện; Restfull API; Unit Test; ...",
          fullContent: "",
          level: "80",
        },

        // Skill[3]
        {
          name: "C# ASP.Net / WinForm",
          shortContent:
            "Thành thạo: Xử lý sự kiện; thao tác với cơ sở dữ liệu; nhập/xuất file; đa luồng; thư viện: DevExpress; ...",
          fullContent: "",
          level: "80",
        },

        // Skill[4]
        {
          name: "MVC, Clean Architecture",
          shortContent: "",
          fullContent: "",
          level: "80",
        },

        // Skill[5]
        {
          name: "SQL Server",
          shortContent:
            "Thành thạo: Thiết kế cơ sở dữ liệu quan hệ; Chuẩn hóa; CRUD; View, Procedure, Function, Trigger; Index; Quản lý User, Role; Transaction; Backup, Restore,...",
          fullContent: "",
          level: "80",
        },

        // Skill[6]
        {
          name: "MySQL / MariaDB",
          shortContent: "",
          fullContent: "",
          level: "85",
        },

        // Skill[7]
        {
          name: "Oracle",
          shortContent:
            "Hiểu biết: Kiến trúc Oracle; Quản lý Instance; Quản lý Tablespaces, Datafiles; Cấu trúc lưu trữ; Quản lý quyền, chức danh; Ngôn ngữ PL-SQL (Create, Select, Insert, Update, Delete, View, Procedure, Function, Trigger);...",
          fullContent: "",
          level: "70",
        },

        // Skill[8]
        {
          name: "Realtime Database (Firebase)",
          shortContent: "",
          fullContent: "",
          level: "80",
        },

        // Skill[9]
        {
          name: "Phân tích, thiết kế hệ thống thông tin hướng chức năng",
          shortContent: "",
          fullContent: "",
          level: "80",
        },

        // Skill[10]
        {
          name: "Phân tích, thiết kế hệ thống thông tin hướng đối tượng",
          shortContent: "",
          fullContent: "",
          level: "80",
        },

        // Skill[11]
        {
          name: "Giải quyết vấn đề",
          shortContent: "",
          fullContent: "",
          level: "90",
        },

        // Skill[12]
        {
          name: "Làm việc độc lập",
          shortContent: "",
          fullContent: "",
          level: "100",
        },

        // Skill[13]
        {
          name: "Làm việc nhóm",
          shortContent: "",
          fullContent: "",
          level: "100",
        },

        // Skill[14]
        {
          name: "Version control (Git / Github)",
          shortContent: "",
          fullContent: "",
          level: "90",
        },

        // Skill[15]
        {
          name: "Các ngôn ngữ lập trình khác: C/C++, Java, PHP",
          shortContent: "",
          fullContent: "",
          level: "90",
        },

        // Skill[16]
        {
          name: "Tiếng anh",
          shortContent: "",
          fullContent: "",
          level: "50",
        },

        // Skill[17]
        {
          name: "Lập trình socket (TCP, UDP)",
          shortContent:
            "Thành thạo: Sử dụng Stream Socket (TCP), Datagram Socket (UDP); Gửi/nhận dữ liệu theo luồng byte; Kiểm soát kết nối; Đa luồng; Mã hóa/giải mã dữ liệu; ...",
          fullContent: "",
          level: "80",
        },

        // Skill[18]
        {
          name: "Python",
          shortContent: "",
          fullContent: "",
          level: "50",
        },
      ],
    },
  },
};

export default resource;
