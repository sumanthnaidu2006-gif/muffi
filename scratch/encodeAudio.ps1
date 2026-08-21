$bytes = [System.IO.File]::ReadAllBytes('public\voice_note.m4a')
$b64 = [System.Convert]::ToBase64String($bytes)
$prefix = 'export const VOICE_NOTE_AUDIO = "' + 'data:audio/mp4;base64,' + $b64 + '";'
[System.IO.File]::WriteAllText('src\assets\voiceNoteBase64.js', $prefix)
Write-Output "SUCCESS: Base64 generated with size $($prefix.Length)"
