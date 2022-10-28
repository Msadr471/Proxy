function FindProxyForURL(url, host) {
    if (isPlainHostName(host))
        return "DIRECT";
    else if (shExpMatch(host, "*.ir"))
        return "DIRECT";
    else
        return "HTTP 100.84.207.134:40161";
}
