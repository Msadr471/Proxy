function FindProxyForURL(url, host) {
    if (isPlainHostName(host))
        return "DIRECT";
    else
        return "SOCKS5 100.84.207.134:40161";
}
