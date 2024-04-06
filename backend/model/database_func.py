import csv, json, os

def read_data(file) -> list:
    if not os.path.isfile(file):
        raise ValueError(f"No file found {file}")
    
    result = []
    try:
        with open(file, 'r') as f:
            csv_reader = csv.DictReader(f)
            for row in csv_reader:
                result.append(dict(row))
        f.close()
    except Exception as e:
        print(f"Error reading data from {file}: {e}")
    return result


def write_data(file, data) -> bool:
    if not os.path.isfile(file):
        raise ValueError(f"No file found {file}")
    
    try:
        with open(file, 'a', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=data.keys())
            if f.tell() == 0:  # if the file is empty or not
                writer.writeheader()  # write the key
            writer.writerow(data)
        f.close()
        return 1
    except Exception as e:
        print(f"Error appending data to {f}: {e}")
    return 0