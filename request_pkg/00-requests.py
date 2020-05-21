import requests


def main():
    """main
    http://exchangeratesapi.io/
    """
    response = requests.get("http://www.google.com")
    print("Status Code: ", response.status_code)
    print("Headers: ", response.headers)
    print("Content-Type: ", response.headers['Content-Type'])
    print("Content-Text: ", response.text)


if __name__ == '__main__':
    main()
