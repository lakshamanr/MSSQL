export class DatabaseFile {
  // Represents the name of the file
  FileName: string;

  // Represents the type of file (DATA, LOG, etc.)
  FileType: string;

  // Represents the physical file location on the disk
  FileLocation: string;

  // Represents the current file size in megabytes
  CurrentSizeMB: number;

  // Represents the maximum file size in megabytes (or 'Unlimited')
  MaxSizeMB: string;

  // Represents the growth type (Percentage or Pages of 8KB)
  GrowthType: string;

  constructor(
    fileName: string,
    fileType: string,
    fileLocation: string,
    currentSizeMB: number,
    maxSizeMB: string,
    growthType: string
  ) {
    this.FileName = fileName;
    this.FileType = fileType;
    this.FileLocation = fileLocation;
    this.CurrentSizeMB = currentSizeMB;
    this.MaxSizeMB = maxSizeMB;
    this.GrowthType = growthType;
  }
}
