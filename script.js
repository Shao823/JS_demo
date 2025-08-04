// 点击按钮添加新项目
document.getElementById("addBtn").addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "新添加的项目";
  newItem.classList.add("list-item");
  document.getElementById("myList").appendChild(newItem);

  // 注册悬停事件（新项目也需要绑定）
  addHoverListener(newItem);
});

// 输入框响应
document.getElementById("nameInput").addEventListener("input", (event) => {
  const text = event.target.value;
  document.getElementById("previewText").textContent =
    text ? `你输入了：${text}` : "你输入的内容会出现在这里";
});

// 鼠标悬停提示
const tooltip = document.getElementById("tooltip");

function showTooltip(text, x, y) {
  tooltip.textContent = text;
  tooltip.style.left = x + 10 + "px";
  tooltip.style.top = y + 10 + "px";
  tooltip.classList.remove("hidden");
}

function hideTooltip() {
  tooltip.classList.add("hidden");
}

// 给每个列表项绑定悬停事件
function addHoverListener(item) {
  item.addEventListener("mouseover", (event) => {
    showTooltip("你悬停在：" + item.textContent, event.pageX, event.pageY);
  });

  item.addEventListener("mouseout", () => {
    hideTooltip();
  });
}

// 初始列表项绑定悬停事件
document.querySelectorAll(".list-item").forEach(addHoverListener);
