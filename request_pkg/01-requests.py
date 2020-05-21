import requests


def main():
    """main
    http://exchangeratesapi.io/
    """
    url = "https://api.exchangeratesapi.io/latest"
    response = requests.get(url)
    if response.status_code != 200:
        print("Status Code: ", response.status_code)
        raise Exception("There was an error!")

    data = response.json()
    print("JSON data: ", data)


if __name__ == '__main__':
    main()
