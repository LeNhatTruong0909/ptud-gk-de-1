# Flask Blog

## Thông tin cá nhân
- **Họ tên:** Lê Nhật Trường 
- **Mã sinh viên:** 22716321

## Mô tả project
Flask Blog là một ứng dụng blog hoàn chỉnh được xây dựng bằng Python với framework Flask. Dự án này được phát triển nhằm mục đích tạo ra một nền tảng blog đơn giản nhưng đầy đủ tính năng, nơi người dùng có thể đăng ký, đăng nhập, tạo và quản lý các bài viết của mình.

### Các tính năng chính:
1. **Hệ thống người dùng**
   - Đăng ký và đăng nhập tài khoản
   - Phân quyền đa dạng:
     - Admin: Quản lý toàn bộ hệ thống
     - Editor: Xem, chỉnh sửa, xóa bài viết
     - Collaborator: Xem và chỉnh sửa bài viết
     - Viewer: Chỉ có quyền xem bài viết
   - Admin có thể khóa tài khoản và đặt lại mật khẩu của người dùng
   - Người dùng có thể tự thay đổi mật khẩu của mình

2. **Quản lý bài viết**
   - Tạo, đọc, cập nhật, xóa bài viết
   - Bài viết có thể hiển thị hình ảnh
   - Hỗ trợ xóa hàng loạt bài viết
   - Phân trang hiển thị bài viết (5 bài/trang)

3. **Tương tác**
   - Có Layout: Sidebar (Có Thanh Điều Hướng)
   - Hệ thống bình luận trên bài viết
   - Giao diện thân thiện người dùng

## Hướng dẫn cài đặt

1. Clone the repository:
   ```
   git clone https://github.com/LeNhatTruong0909/flask-tiny-app.git
   cd flask-tiny-app
   ```
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Run the application:
   ```
   python app.py
   ```

4. Open your web browser and go to `http://127.0.0.1:5000` to access the blog.

### Phương pháp 2: Sử dụng setup.bat (Khuyến nghị)

1. Clone repository:
   ```
   git clone https://github.com/LeNhatTruong0909/flask-tiny-app.git
   ```
2. Chạy file setup.bat để cài đặt tự động:
- Chạy lệnh sau trong terminal (Command Prompt):
   ```
   cd flask-tiny-app
   setup.bat
   ```
## hoặc Click vào file setup.bat để chạy trực tiếp

3. Sau khi cài đặt hoàn tất, chạy ứng dụng:
   ```
   venv\Scripts\activate
   
   python app.py
   ```
4. Truy cập ứng dụng tại `http://127.0.0.1:5000`

> **Lưu ý**: Repository này đã bao gồm sẵn database với dữ liệu mẫu, giúp bạn có thể bắt đầu sử dụng ngay mà không cần cấu hình thêm.

## Tài khoản mặc định

- **Admin:**
  - Username: admin
  - Password: admin123

## Hệ thống phân quyền
| Quyền           | Mô tả |
|----------------|------------------------------------------|
| **Viewer**     | Chỉ có quyền xem bài viết và bình luận |
| **Collaborator** | Có thể tạo và chỉnh sửa bài viết của mình |
| **Editor**     | Có thể tạo, chỉnh sửa và xóa bài viết của mình |
| **Admin**      | Có mọi quyền trên hệ thống  |
| **Admin**      | - Là người trao quyền (Viewer/Collaborator/Editor) cho user  |

## Link triển khai
Ứng dụng đã được triển khai tại: https://github.com/LeNhatTruong0909/ptud-gk-de-1.git

## Sử dụng Docker

### Phương pháp 1: Sử dụng docker-setup.bat
1. Chạy file docker-setup.bat

### Phương pháp 2: Sử dụng lệnh Docker thủ công
1. Xây dựng Docker image:
   ```
   docker-compose build
   ```

2. Khởi động container:
   ```
   docker-compose up -d
   ```
3. Truy cập ứng dụng tại `http://localhost:5000`

4. Dừng container:
   ```
   docker-compose down
   ```