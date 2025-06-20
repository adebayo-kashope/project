<?php
// DB connection
$host = '127.0.0.1';
$db = 'todo_app';
$user = 'root';
$pass = 'blackdiamond'; // <-- Replace with your MySQL root or app user password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("DB connection failed: " . $e->getMessage());
}

// Add task
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add'])) {
    $stmt = $pdo->prepare("INSERT INTO tasks (title) VALUES (?)");
    $stmt->execute([trim($_POST['title'])]);
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

// Delete task
if (isset($_GET['delete'])) {
    $stmt = $pdo->prepare("DELETE FROM tasks WHERE id = ?");
    $stmt->execute([$_GET['delete']]);
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

// Toggle done
if (isset($_GET['toggle'])) {
    $stmt = $pdo->prepare("UPDATE tasks SET done = NOT done WHERE id = ?");
    $stmt->execute([$_GET['toggle']]);
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

// Edit task
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit'])) {
    $stmt = $pdo->prepare("UPDATE tasks SET title = ? WHERE id = ?");
    $stmt->execute([trim($_POST['title']), $_POST['id']]);
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

// Get tasks
$tasks = $pdo->query("SELECT * FROM tasks ORDER BY id DESC")->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html>
<head>
    <title>PHP To-Do List (MySQL)</title>
    <style>
        body { font-family: Arial; margin: 40px; }
        .done { text-decoration: line-through; color: gray; }
        a { margin-right: 10px; }
    </style>
</head>
<body>
    <h1>To-Do List</h1>

    <!-- Add Task Form -->
    <form method="post">
        <input type="text" name="title" placeholder="New task" required>
        <button type="submit" name="add">Add</button>
    </form>

    <ul>
        <?php foreach ($tasks as $task): ?>
            <li>
                <span class="<?= $task['done'] ? 'done' : '' ?>">
                    <?= htmlspecialchars($task['title']) ?>
                </span>

                <a href="?toggle=<?= $task['id'] ?>"><?= $task['done'] ? 'Undo' : 'Done' ?></a>
                <a href="?edit=<?= $task['id'] ?>">Edit</a>
                <a href="?delete=<?= $task['id'] ?>" onclick="return confirm('Delete this task?');">Delete</a>
            </li>

            <?php if (isset($_GET['edit']) && $_GET['edit'] == $task['id']): ?>
                <form method="post">
                    <input type="hidden" name="id" value="<?= $task['id'] ?>">
                    <input type="text" name="title" value="<?= htmlspecialchars($task['title']) ?>" required>
                    <button type="submit" name="edit">Update</button>
                </form>
            <?php endif; ?>
        <?php endforeach; ?>
    </ul>
</body>
</html>
