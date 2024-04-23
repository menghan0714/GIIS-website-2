import os


def rename_files():
    # 獲取當前目錄下的所有檔案
    files = os.listdir(".")
    print("All files:", files)
    # 過濾出以 "drzhang" 開頭的圖檔
    files = [f for f in files if os.path.isfile(f) and f.startswith("drzhang")]
    print("Filtered files:", files)
    counter = 1

    # 遍歷檔案列表，並重新命名每個檔案
    for file in files:
        # 定義新的檔案名稱，始終使用 .png 副檔名
        new_name = f"homepage{counter}.png"
        # 重新命名檔案
        os.rename(file, new_name)
